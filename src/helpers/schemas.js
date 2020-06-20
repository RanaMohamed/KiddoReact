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

const datee = Joi.string().required().messages({
	'string.empty': 'Date should not be empty',
	'any.required': `Date is required`,
});

export const loginSchema = Joi.object({
	email,
	password,
});

export const kidSignupSchema = Joi.object({
	username,
	parentEmail: email,
	password,
	dateOfBirth: datee,
});
