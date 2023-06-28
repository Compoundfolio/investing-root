"use client"

import { ActButton } from "@core"
import { memo } from "react"
import { Form, Input, useForm } from "src/core/client"
import { initialValues } from "./consts"
import validation from "./validation"
import { useSignInWithEmail } from "src/api/restful"

const EmailAuthForm = () => {
  const { values, errors, handleChange, handleSubmit, setFieldError } = useForm(
    {
      validationSchema: validation,
      initialValues,
      onSubmit: (values) => {
        callSignIn(values)
      },
    }
  )

  const { mutate: callSignIn, isLoading, data } = useSignInWithEmail()

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        required
        autofocus
        name="email"
        labelText="Email"
        type="email"
        value={values.email}
        errorMessage={errors.email}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        labelText="Unique password"
        type="password"
        value={values.password}
        errorMessage={errors.password}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      <ActButton color="green" type="submit" className="w-full">
        Sign in
      </ActButton>
    </Form>
  )
}

export default memo(EmailAuthForm)
