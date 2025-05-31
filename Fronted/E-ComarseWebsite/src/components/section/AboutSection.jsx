import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingBag, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa';

function AboutSection() {
  return (
    <Wrapper>
      <div className='container'>
        {/* Main About Section */}
        <div className='grid grid-two-column'>
          <div className='about-content'>
            <p className='intro-data'>Welcome to</p>
            <h1>ElectroMart</h1>
            <p className='description'>
              Explore the Future of Electronics at ElectroMart, we specialize in bringing you the latest and most reliable electronic products designed to enhance your lifestyle. Our collection features top-tier smartphones, laptops, smartwatches, audio devices, home appliances, and essential tech accessories—all handpicked for quality, performance, and innovation.
            </p>
            <div className='features-grid'>
              <div className='feature-item'>
                <FaShoppingBag className='feature-icon' />
                <h3>Wide Selection</h3>
                <p>Extensive range of quality products</p>
              </div>
              <div className='feature-item'>
                <FaTruck className='feature-icon' />
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping</p>
              </div>
              <div className='feature-item'>
                <FaShieldAlt className='feature-icon' />
                <h3>Secure Payment</h3>
                <p>Safe and encrypted transactions</p>
              </div>
              <div className='feature-item'>
                <FaHeadset className='feature-icon' />
                <h3>24/7 Support</h3>
                <p>Always here to help you</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <figure>
              <img 
                src="https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg"
                alt="Modern Electronics"
                className="main-image"
              />
            </figure>
          </div>
        </div>

        {/* Mission Section */}
        <div className='mission-section'>
          <h2>Our Mission</h2>
          <p>
            E-commerce ElectroMart is an Indian-based company facilitating e-commerce business solutions with a main motto of promoting "VOCAL for LOCAL". Our aim is to make ElectroMart as "DIGITAL INDIA" by encouraging our local businesses to a worldwide platform.
          </p>
        </div>

        {/* Team Section */}
        <div className='team-section'>
          <h2>Our Team</h2>
          <div className='team-grid'>
            <div className='team-member'>
              <img src="/img.jpg" alt="Nishchal Jain" />
              <h3>Nishchal Jain</h3>
              <p>Lead Developer</p>
            </div>
            <div className='team-member'>
              <img src="/shanu.jpg" alt="Shashank Lal" />
              <h3>Shashank Lal</h3>
              <p>Frontend Developer</p>
            </div>
            <div className='team-member'>
              <img src="/neha.jpg" alt="Neha Surayanshi" />
              <h3>Neha Surayanshi</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className='team-member'>
              <img src="/rose.jpg" alt="Rose Kumari" />
              <h3>Rose Kumari</h3>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

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
    margin-bottom: 4rem;
  }

  .about-content {
    .intro-data {
      color: #4a5568;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      color: #2d3748;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .description {
      color: #4a5568;
      font-size: 1.5rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    .feature-item {
      background: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .feature-icon {
        font-size: 2rem;
        color: #4f37eb;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.2rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
      }

      p {
        color: #718096;
        font-size: 0.9rem;
      }
    }
  }

  .about-image {
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

    .main-image {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .mission-section {
    text-align: center;
    padding: 4rem 0;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 4rem;

    h2 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
    }

    p {
      color: #4a5568;
      font-size: 1.1rem;
      line-height: 1.8;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .team-section {
    text-align: center;

    h2 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;

      .team-member {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 1rem;
          object-fit: cover;
        }

        h3 {
          font-size: 1.2rem;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        p {
          color: #718096;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 4rem 0;

    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .about-content {
      h1 {
        font-size: 2.5rem;
      }
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default AboutSection;