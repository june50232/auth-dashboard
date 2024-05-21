import React from 'react'
import * as Yup from 'yup'
import { FormikProvider, useFormik } from 'formik'

import { useAuth } from '../../../utils/auth'
import Input from '../../../components/Input'

import './styles.scss'

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(8, 'Your username is not strong enough. Use at least 8 characters')
    .max(50, 'Too Long!')
    .required('username is required'),
  password: Yup.string()
    .min(8, 'Your password is not strong enough. Use at least 8 characters')
    .max(50, 'Too Long!')
    .required('password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('email is required'),
});

export default function LoginForm({ setShow2FA }) {
  let auth = useAuth();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      auth.signin(values.userName, () => {
        setShow2FA(true)
      });
    },
  });

  const {
    handleSubmit,
    isValid,
    isDirty,
  } = formik

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up for an Account</h2>
        <Input name="userName" type="text" label="userName"/>
        <Input name="email" type="email" label="email" />
        <Input name="password" type="text" label="password" />
        <button type="submit" disabled={isDirty || !isValid}>Sign Up</button>
      </form>
    </FormikProvider>
  )
}