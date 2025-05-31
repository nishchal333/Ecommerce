import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      text-align: center;
      margin-bottom: 4rem;
      
      h2 {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.heading};
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin-bottom: 5rem;
    }

    .map-container {
      margin-bottom: 5rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .team-section {
      margin-bottom: 5rem;

      h3 {
        text-align: center;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.heading};
        margin-bottom: 3rem;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .team-member {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          object-fit: cover;
        }

        h4 {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.heading};
          margin-bottom: 0.5rem;
        }

        p {
          color: ${({ theme }) => theme.colors.text};
          margin-bottom: 1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;

          a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${({ theme }) => theme.colors.text};
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: ${({ theme }) => theme.colors.btn};
            }

            svg {
              font-size: 1.2rem;
            }
          }
        }
      }
    }

    .contact-form {
      background: white;
      padding: 3rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        text-align: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.heading};
        margin-bottom: 2rem;
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input, textarea {
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.btn};
          }
        }

        textarea {
          resize: vertical;
          min-height: 150px;
        }

        input[type="submit"] {
          background-color: ${({ theme }) => theme.colors.btn};
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.btn};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            transform: translateY(-2px);
          }
        }
      }
    }
  `;

  const teamMembers = [
    {
      name: "Shashank Lal",
      role: "Frontend Developer",
      image: "shanu.jpg",
      email: "shashanklal43@gmail.com",
      phone: "+91 95757-95145",
      linkedin: "https://www.linkedin.com/in/shashank-lal-5b4b0b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Rose Kumari",
      role: "Backend Developer",
      image: "rose.jpg",
      email: "kumarirose73@gmail.com",
      phone: "+91 62060-81399",
      linkedin: "michael-chen"
    },
    {
      name: "Neha Suryvanshi",
      role: "UI/UX Designer",
      image: "neha.jpg",
      email: "neha2005suryavanshi@gmail.com",
      phone: "+91 89624-62950",
      linkedin: "emily-rodriguez"
    },
    {
      name: "Nishchal Jain",
      role: "Full Stack Developer",
      image: "img.jpg",
      email: "nishchal.jain.787@gmail.com",
      phone: "+91 94067-01596",
      linkedin: "https://www.linkedin.com/in/nishchal-jain-4b321a293"
    }
  ];

  return (
    <Wrapper>
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any inquiries or support</p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118255.27362048673!2d82.08283682180178!3d22.145896400652187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9ab6a7%3A0xc6f3f89d9eac7caf!2sBilaspur%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1714929043868!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="team-section">
          <h3>Our Development Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <div className="contact-info">
                  <a href={`mailto:${member.email}`}>
                    <FaEnvelope /> {member.email}
                  </a>
                  <a href={`tel:${member.phone}`}>
                    <FaPhone /> {member.phone}
                  </a>
                  <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form
            action="https://formspree.io/f/xvoellpp"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Your Message"
            ></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;