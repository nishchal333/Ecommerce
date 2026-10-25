import ast
import json
import math
import os
from pathlib import Path

import kagglehub
import pandas as pd


OUTPUT_PATH = Path(__file__).with_name("kaggle-products.json")
DATASET = "datafiniti/electronic-products-prices"


def first_value(row, *columns, default=""):
    for column in columns:
        value = row.get(column)
        if value is not None and not (isinstance(value, float) and math.isnan(value)):
            text = str(value).strip()
            if text and text.lower() != "nan":
                return value
    return default


def parse_list(value):
    if isinstance(value, list):
        return value
    if not value:
        return []
    try:
        parsed = ast.literal_eval(str(value))
        return parsed if isinstance(parsed, list) else [parsed]
    except (ValueError, SyntaxError):
        return [item.strip() for item in str(value).split(",") if item.strip()]


def number(value, default=0):
    try:
        parsed = float(str(value).replace("$", "").replace(",", "").strip())
        return default if math.isnan(parsed) else parsed
    except (TypeError, ValueError):
        return default


def normalize(row):
    name = str(first_value(row, "name", "product_name", default="Electronic product"))
    company = str(first_value(row, "brand", "manufacturer", "company", default="Unknown"))
    category = str(first_value(row, "primaryCategories", "category", "categories", default="electronics"))
    category = category.split(",")[0].strip().lower() or "electronics"
    images = parse_list(first_value(row, "imageURLs", "imageUrl", "image", default=""))
    image = str(images[0]) if images else "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800"
    description = str(first_value(row, "description", default=f"{name} from {company}."))
    price = number(first_value(row, "salePrice", "price", "prices.amountMax", "prices.amountMin", default=0))
    rating = number(first_value(row, "reviews.rating", "rating", default=0))
    review_count = number(first_value(row, "reviews.numReviews", "reviewCount", default=0))

    return {
        "name": name,
        "company": company,
        "price": price,
        "colors": ["#000000", "#CDD0D0"],
        "image": image,
        "description": description,
        "category": category,
        "featured": False,
        "shipping": True,
        "stock": 25,
        "reviews": int(review_count),
        "stars": min(max(rating, 0), 5),
    }


def deduplicate(products):
    unique_products = {}
    for product in products:
        key = "|".join([
            " ".join(product["name"].lower().split()),
            " ".join(product["company"].lower().split()),
        ])
        existing = unique_products.get(key)
        if existing is None or (existing["price"] == 0 and product["price"] > 0):
            unique_products[key] = product
    return list(unique_products.values())


def main():
    dataset_path = Path(kagglehub.dataset_download(DATASET))
    requested_file = os.getenv("KAGGLE_DATASET_FILE", "")
    if requested_file:
        data_file = dataset_path / requested_file
    else:
        supported_files = {".csv", ".tsv", ".json", ".jsonl", ".parquet"}
        data_files = [file for file in dataset_path.rglob("*") if file.suffix.lower() in supported_files]
        if not data_files:
            raise FileNotFoundError(f"No supported data file found in {dataset_path}")
        data_file = data_files[0]

    if data_file.suffix.lower() == ".csv":
        products = pd.read_csv(data_file)
    elif data_file.suffix.lower() == ".tsv":
        products = pd.read_csv(data_file, sep="\t")
    elif data_file.suffix.lower() in {".json", ".jsonl"}:
        products = pd.read_json(data_file, lines=data_file.suffix.lower() == ".jsonl")
    else:
        products = pd.read_parquet(data_file)

    normalized = [normalize(row) for row in products.to_dict(orient="records")]
    normalized = [product for product in normalized if product["name"]]
    normalized = deduplicate(normalized)
    OUTPUT_PATH.write_text(json.dumps(normalized, indent=2), encoding="utf-8")
    print(f"Imported {len(normalized)} products into {OUTPUT_PATH}")


if __name__ == "__main__":
    main()