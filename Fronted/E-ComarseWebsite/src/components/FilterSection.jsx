import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../Context/Filter_product';
import { FaCheck } from "react-icons/fa";
import FormatPrice from './Helper/FormatePrice';
import { Button } from '../Style/Button';
function FilterSection() {
  const {
    filters: { text ,colors, price, maxPrice, minPrice},
    updateFilterValue,
    all_products,clearFilters
  } = useFilterContext();
// To GET UNIQUE DATA OF EACH FIELD
const getUniqueData = (data, property)=>{
  let newVal = data.map((curElm)=>{
    return curElm[property];
  })
  newVal = ["All",...new Set(newVal)];
return newVal;

}
const getUniqueCompanyData = (data, property)=>{
  let newVal = data.map((curElm)=>{
    return curElm[property];
  })
  newVal = ["All",...new Set(newVal)];
return newVal;

}
const getUniquecolorData = (data, property)=>{
  let newVal = data.map((curElm)=>{
    return curElm[property];
  })
  
  if(property==="colors"){
    // return (newVal = ["All", ...new Set([].concat(...newVal))]);
    newVal = newVal.flat();// unique array data ko ek array me lane ke liye

  }
    return (newVal = ["All",...new Set(newVal)]);
  

}
// we need unique data
const categoryOnlyData = getUniqueData(all_products, "category");
const companyOnlyData = getUniqueCompanyData(all_products, "company");
const colorsData = getUniquecolorData(all_products, "colors");

  return (
    < Wrapper>
        <div className='filter-search'>
  <form onSubmit={(e)=>{
    e.preventDefault()
  }}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
           
          />

  </form>
        </div>
        <div className='filter-category'>
  <h3>Category</h3>
  <div>
    {categoryOnlyData.map((curElm,index)=>{
return (
<button
  key ={index}
  type ="button"
  name="category"
  value={curElm}
  onClick={updateFilterValue}>
  {curElm}
</button>
)
    })}
  </div>
        </div>
       {/* for copmuny */}

        <div className=''>
  <h3>company</h3>
  <form action="#">
    <select name="company" id='company' className='filter-company--select' onClick={updateFilterValue} >
      {
        companyOnlyData.map((curElm,index)=>{
          return(
            <option value={curElm} name="company" key={index} >{curElm}</option>
          )
        }

        )
      }
      
    </select>

    </form>

        </div>
        <div className="filter-colors colors"> 
        <h3>Colors</h3>
        <div className='filter-color-style'>
          {
            colorsData.map((curColors,index)=>{
  if(curColors ==="All"){
    return(
      <button
      key={index}
      value={curColors}
      name='colors'
      type='button'
      
      className='color-all--style'
      onClick={updateFilterValue}
      >
  All
      </button>
    )
  }
  


              return(
                <button
                key={index}
                value={curColors}
                name='colors'
                type='button'
                style={{backgroundColor: curColors}}
                className={colors=== curColors ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
                >
                 {colors === curColors ? <FaCheck className="checkStyle" /> : null}
                </button>
              )
            }
          )
          }
        </div>
        </div>
        
      <div className="filter_price">
        <h3>Price</h3>
        <p>
        <FormatPrice price={price}/>
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

    </ Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    // justify-content: center;
    // align-item: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 4rem;
    background-color: #000;
    border-radius: 80%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.5rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection
