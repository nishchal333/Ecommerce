// src/components/PaymentPage.jsx
import React from 'react';
import { useCartContext } from '../Context/cart_context';
import FormatPrice from './Helper/FormatePrice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from '../Style/Button';
const PaymentPage = () => {
  const { total_price, shipping_fee } = useCartContext();
  const navigate = useNavigate();
  const orderTotal = total_price + shipping_fee;

  const handlePayment = async () => {
    try {
      const orderUrl = 'https://bharat-ecommarse-2.onrender.com/api/payment/create-order';
      const response = await axios.post(orderUrl, { amount: orderTotal, currency: 'INR' });

      const { id, currency, amount } = response.data;

      const options = {
        key: 'rzp_test_b7xXFHwa5522AQ', // Razorpay key ID
        amount,
        currency,
        name: 'ElectroMart',
        description: 'only form test ,Transaction',
        image: '../second.jpg',
        order_id: id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
          navigate('/success'); // Navigate to a success page
        },
        prefill: {
          name: 'Nishchlal Jain',
          email: 'nishchal.jain.787@gmail.com',
          contact: '9406701596',
        },
        notes: {
          address: 'ElectroMart office',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>Order Summary</h2>
        <div className="summary">
          <div>
            <p>Subtotal:</p>
            <p><FormatPrice price={total_price} /></p>
          </div>
          <div>
            <p>Shipping Fee:</p>
            <p><FormatPrice price={shipping_fee} /></p>
          </div>
          <hr />
          <div>
            <p>Order Total:</p>
            <p><FormatPrice price={orderTotal} /></p>
          </div>
          <Button onClick={handlePayment}>Pay Now</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  .summary {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .summary div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  hr {
    margin: 20px 0;
  }
  button {
    background: #f37254;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export default PaymentPage;
