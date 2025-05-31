import React from 'react'
import ProductList from './ProductList';
import FilterSection from './FilterSection';
import Sort from './Sort';
import styled from 'styled-components';

function ProducrCard() {

  return (
<Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>

  )
}
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.1fr 0.9fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default  ProducrCard