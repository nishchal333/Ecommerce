import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Other E-Commerce Portals to get Onboarded...</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo_23-2149738985.jpg?size=626&ext=jpg&ga=GA1.1.1310929021.1706160487&semt=ais"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqxtMBrth5AMWiGWjrWlLqkzh80Td8iCKSg&s"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2023/11/Temu-Logo.png"
              alt="trusted-brands"
            />
          </div>
          </div>
          <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Farmacia-Loreto-Gallo-logo.png"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2022/01/Lazada-Logo.png"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 15rem 0 0 0;
    display: flex;
    flex-direction:column;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 5rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr 1 fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;