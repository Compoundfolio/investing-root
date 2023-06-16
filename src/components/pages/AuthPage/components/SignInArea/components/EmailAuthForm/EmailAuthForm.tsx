"use client"

import { colors } from '@core'
import { useFormik } from 'formik'
import { memo } from 'react'
import { Form, Input } from 'src/core/client'
import { initialValues } from './consts';
import validation from './validation'

const EmailAuthForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema: validation,
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        required
        autofocus
        name="email"
        labelText="Email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        labelText="Unique password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        style={{ backgroundColor: colors.darkGreen }}
      >
        Sign in
      </button>
    </Form>
  )
}

export default memo(EmailAuthForm)