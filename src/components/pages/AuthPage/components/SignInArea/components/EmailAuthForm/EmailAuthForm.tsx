"use client"

import { ActButton } from "@core"
import { memo } from "react"
import { Form, Input, useForm } from "src/core/client"
import { initialValues } from "./consts"
import validation from "./validation"
import { useAuthTypeSwitch, useHandleAuthSubmit } from "./hooks"

const EmailAuthForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldError,
  } = useForm({
    validationSchema: validation,
    initialValues,
    onSubmit: (values) => {
      callSignIn({
        data: values,
        authType: emailAuthType
      })
    },
  })

  const {
    emailAuthType,
    authTypeSwitcherButtonName,
    handleEmailAuthTypeChange,
  } = useAuthTypeSwitch()

  const {
    mutate: callSignIn,
    isLoading,
  } = useHandleAuthSubmit()

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
      <ActButton
        color="green"
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        Sign in
      </ActButton>
      <button onClick={handleEmailAuthTypeChange}>
        {authTypeSwitcherButtonName}
      </button>
    </Form>
  )
}

export default memo(EmailAuthForm)
