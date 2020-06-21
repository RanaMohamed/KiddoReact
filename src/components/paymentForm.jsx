import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from '../axios';
import { useSelector } from 'react-redux';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: '#32325d',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '2rem',
			'::placeholder': {
				color: '#aab7c4',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	},
};

const PaymentForm = ({ product, closeForm }) => {
	const user = useSelector((state) => state.user.user);
	const [error, setError] = useState('');
	const [secret, setSecret] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!secret) {
			const { client_secret } = await axios.get(
				`/secret?amount=${product?.price * 10}`
			);
			setSecret(client_secret);
		}
		if (!stripe || !elements || !secret) {
			return;
		}

		const result = await stripe.confirmCardPayment(secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: user?.username,
				},
			},
		});

		if (result.error) {
			// Show error to your customer (e.g., insufficient funds)
			setError(result.error.message);
		} else {
			// The payment has been processed!
			if (result.paymentIntent.status === 'succeeded') {
				console.log(result.paymentIntent);
				await axios.post(`/product/buy/${product._id}`, {
					payment: result.paymentIntent,
				});
				closeForm();
			}
		}
	};

	return (
		<div className='modal'>
			<div className='modal__body'>
				<p>You are about to buy {product?.post?.title}</p>
				<form onSubmit={handleSubmit}>
					<label className='d-flex my-sm'>Card details</label>
					<CardElement options={CARD_ELEMENT_OPTIONS} />
					<span className='error-message'>{error}</span>
					<button className='btn btn--rect btn--1' disabled={!stripe}>
						Confirm order
					</button>
					<button className='btn btn--rect btn--primary' disabled={!stripe}>
						Cancel order
					</button>
				</form>
			</div>
		</div>
	);
};

export default PaymentForm;
