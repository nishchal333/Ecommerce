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
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState('');
  const subtotal = Number(total_price || 0);
  const shippingAmount = Number(shipping_fee || 0);
  const orderTotal = subtotal + shippingAmount;
  const orderAmount = Math.round(orderTotal * 100);

  const handlePayment = async () => {
    if (isProcessing) return;

    setPaymentError('');
    setIsProcessing(true);

    try {
      if (!window.Razorpay) {
        throw new Error('Razorpay Checkout has not loaded. Refresh the page and try again.');
      }

      const orderUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/payment/create-order`;
      const response = await axios.post(orderUrl, { amount: orderAmount, currency: 'INR' });

      const { id, currency, amount } = response.data;
      if (!id || !currency || !amount) {
        throw new Error('The server returned an invalid payment order.');
      }

      const options = {
        key: 'rzp_test_ShpGyQ24BY0kCx', // Razorpay key ID
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
      rzp1.on('payment.failed', (paymentError) => {
        console.error('Razorpay payment failed', paymentError.error);
        setPaymentError(paymentError.error?.description || 'Payment failed. Please try again.');
        setIsProcessing(false);
      });
      rzp1.open();
    } catch (error) {
      console.error('Payment setup failed', error.response?.data || error.message);
      const serverMessage = error.response?.data?.message;
      setPaymentError(
        serverMessage ||
        error.message ||
        'Unable to start payment. Please try again.'
      );
      setIsProcessing(false);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>Order Summary</h2>
        <div className="summary">
          <div>
            <p>Subtotal:</p>
            <p><FormatPrice price={subtotal * 100} /></p>
          </div>
          <div>
            <p>Shipping Fee:</p>
            <p><FormatPrice price={shippingAmount * 100} /></p>
          </div>
          <hr />
          <div>
            <p>Order Total:</p>
            <p><FormatPrice price={orderAmount} /></p>
          </div>
          {paymentError && <p className="payment-error" role="alert">{paymentError}</p>}
          <Button onClick={handlePayment} disabled={isProcessing}>
            {isProcessing ? 'Starting payment...' : 'Pay Now'}
          </Button>
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
  button:disabled {
    cursor: wait;
    opacity: 0.7;
  }
  .payment-error {
    color: #b42318;
    margin: 1rem 0;
  }
`;

export default PaymentPage;
