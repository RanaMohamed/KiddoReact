import Joi from '@hapi/joi';

// eslint-disable-next-line no-useless-escape
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const username = Joi.string().required().messages({
	'string.empty': 'Username should not be empty',
	'any.required': `Username is required`,
});

const email = Joi.string().required().pattern(emailRegex).messages({
	'string.pattern.base': 'Email is invalid',
	'string.empty': 'Email should not be empty',
	'any.required': `Email is required`,
});

const password = Joi.string().min(8).required().messages({
	'string.empty': 'Password should not be empty',
	'string.min': `Password should have a minimum length of {#limit}`,
	'any.required': `Password is required`,
});

const date = Joi.string().required().messages({
	'string.empty': 'Date should not be empty',
	'any.required': `Date is required`,
});

const experience = Joi.string().required().messages({
	'string.empty': 'Experience Field should not be empty',
	'any.required': `Experience Field is required`,
});

const phone = Joi.string().required().messages({
	'string.empty': 'Phone should not be empty',
	'any.required': `Phone is required`,
});

export const loginSchema = Joi.object({
	username,
	password,
});

export const kidSignupSchema = Joi.object({
	username,
	parentEmail: email,
	password,
	dateOfBirth: date,
});

export const supporterSignupSchema = Joi.object({
	username,
	email,
	password,
	dateOfBirth: date,
	experience,
});

export const buyerSignupSchema = Joi.object({
	username,
	email,
	password,
	dateOfBirth: date,
	phone,
	address: Joi.any(),
});
