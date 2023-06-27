"use client"

import { ActButton } from "@core"
import { memo } from "react"
import { Form, Input, useForm } from "src/core/client"
import { initialValues } from "./consts"
import validation from "./validation"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { Api } from "src/inversions"
import { useSignInWithEmail } from "src/api/restful"

const EmailAuthForm = () => {
  const { values, errors, handleChange, handleSubmit, setFieldError } = useForm(
    {
      validation,
      initialValues,
      onSubmit: (values) => {
        callSignIn({ data: values })
      },
    }
  )

  const { callSignIn } = useSignInWithEmail({ data: {} })

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
