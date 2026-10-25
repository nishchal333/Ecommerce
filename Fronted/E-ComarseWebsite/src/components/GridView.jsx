import React from 'react'
import styled from 'styled-components';
import Product from './Product';
function GridView({products}) {
  return (
<Wrapper className='section'>
<div className='container grid grid-three-column'>
{products.map((curElm)=>{
    return <Product key={curElm.id}{...curElm}/>
})}
</div>
</Wrapper>
  )
}    
const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0;
      white-space: nowrap;
      background: ${({ theme }) => theme.colors.helper}16;
      border-radius: 0.4rem;
      padding: 0.6rem 0.8rem;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      flex: 1;
      min-width: 0;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.35;
    }

    .caption {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.08rem;
      line-height: 1;
      text-transform: uppercase;
      background: rgba(255, 255, 255, 0.9);
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.5rem 0.7rem;
      border-radius: 0.3rem;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    @media (max-width: 768px) {
      .card-data-flex {
        align-items: flex-start;
      }

      h3 {
        font-size: 1.4rem;
      }

      .card-data--price {
        font-size: 1.5rem;
        padding: 0.5rem 0.6rem;
      }
    }

    @media (max-width: 480px) {
      .card-data-flex {
        display: block;
      }

      h3 {
        margin-bottom: 0.8rem;
      }

      .card-data--price {
        display: inline-block;
      }
    }
  }
`;


export default GridView