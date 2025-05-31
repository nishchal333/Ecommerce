import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">
                Get Started
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>ElectroMart</h3>
            <p>Your one-stop destination for all electronic needs. Quality products, competitive prices, and excellent customer service.</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to our newsletter</h3>
            <form action="#">
              <input type="email" name="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
              <div>
                <a href="https://www.instagram.com/electromart" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href='tel:9406701596'>+91 94067-01596</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href='shashanklal43@gmail.com'>shashanklal43@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Bilaspur, Chhattisgarh 495001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              ©{new Date().getFullYear()} ElectroMart. All Rights Reserved
            </p>
            <div className="footer-links">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 1.8rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.6;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        transition: all 0.3s ease;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          .icons {
            color: ${({ theme }) => theme.colors.footer_bg};
          }
        }

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      }
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.white};

        .contact-icon {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.hr};
        }

        a, span {
          color: ${({ theme }) => theme.colors.white};
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: ${({ theme }) => theme.colors.hr};
          }
        }
      }
    }

    .footer-links {
      display: flex;
      gap: 2rem;
      justify-content: flex-end;

      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.hr};
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }

    .footer-links {
      justify-content: center;
      margin-top: 2rem;
    }
  }
`;

export default Footer;