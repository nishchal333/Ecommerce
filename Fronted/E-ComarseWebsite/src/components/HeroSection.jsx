import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Style/Button";
import styled from "styled-components";
import { keyframes } from "styled-components";

function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>ElectroMart</h1>
            <p className="description">
              Discover the latest in technology with our wide range of
              high-quality electronic items, from smartphones, laptops, and
              smartwatches to home appliances, audio systems, and accessories.
              Whether you're a tech enthusiast or simply upgrading your gadgets,
              our user-friendly interface, secure checkout, and fast delivery
              make your shopping experience smooth and reliable.
            </p>
            <NavLink to={'/about'}>
              <Button className="explore-btn">Explore More</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="main.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-section-data {
    animation: ${fadeIn} 1s ease-out;
    height:50em;
    .intro-data {
      color: #4a5568;
      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 5.5rem;
      font-weight: 800;
      color: #2d3748;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      text-transform: capitalize;
    }

    .description {
      color: #4a5568;
      font-size: 1.6rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .explore-btn {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      background: linear-gradient(45deg, #4f37eb, #6b46c1);
      border: none;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(79, 55, 235, 0.2);
      }
    }
  }

  .hero-section-image {
    position: relative;
    animation: ${fadeIn} 1s ease-out 0.3s backwards;

    figure {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(79, 55, 235, 0.1), rgba(107, 70, 193, 0.1));
      }
    }

    .img-style {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 0;
    
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-section-data {
      text-align: center;

      h1 {
        font-size: 2.5rem;
      }

      .description {
        font-size: 1rem;
      }
    }

    .hero-section-image {
      order: -1;
    }
  }
`;

export default HeroSection;