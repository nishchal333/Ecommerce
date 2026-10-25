import React from 'react'
import { useFilterContext } from '../Context/Filter_product';
import { useProductcontext } from '../Context/Context';
import GridView from './GridView';
import ListView from './ListView';
function ProductList() {
  const {filter_products, grid_view} = useFilterContext();
  const { currentPage, totalPages, goToPage } = useProductcontext();

  if(grid_view === true ){
    return <>
      <GridView products={filter_products}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </>
  }

  if(grid_view === false ){
    return <>
      <ListView products={filter_products}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </>
  }
  



  return (
    <div>ProductList</div>
  )
}

function Pagination({ currentPage, totalPages, goToPage }) {
  return (
    <div className="pagination-controls">
      <button type="button" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button type="button" disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default ProductList