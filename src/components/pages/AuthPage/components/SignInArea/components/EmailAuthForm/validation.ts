import { object, string } from "yup";

// TODO: Make reusable validators

const validation = object().shape({
  email: string()
    .email('Invalid email format')
    .max(256, `Value shouldn't be longer then 256 chars`)
    .required('Email is required'),

  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[0-9]/, 'Password requires at least 1 number')
    .matches(/[a-z]/, 'Password requires at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Password requires at least 1 uppercase letter')
    .matches(/[^\w]/, 'Password requires at least 1 symbol')
    .required('Password is required'),
});

export default validation