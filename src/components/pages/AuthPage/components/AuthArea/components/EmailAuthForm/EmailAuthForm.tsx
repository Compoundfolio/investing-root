"use client"

import { ActButton } from "@core"
import { memo } from "react"
import { Form, Input, useForm } from "src/core/client"
import { initialValues } from "./consts"
import validation from "./validation"
import { EmailAuthType } from "../../types"
import { useHandleEmailAuthSubmit } from "../../hooks"

interface IEmailAuthForm {
  emailAuthType: EmailAuthType
  authButtonTitle: string
}

const EmailAuthForm = ({ emailAuthType, authButtonTitle }: IEmailAuthForm) => {
  const { values, errors, handleChange, handleSubmit, setFieldError } = useForm(
    {
      validationSchema: validation(emailAuthType),
      initialValues,
      onSubmit: ({ email, password }) => {
        callSignIn({
          data: {
            email,
            password,
          },
          authType: emailAuthType,
        })
      },
    }
  )

  const { mutate: callSignIn, isLoading } = useHandleEmailAuthSubmit()
  console.log(1, isLoading)

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
        labelText="Password"
        type="password"
        value={values.password}
        errorMessage={errors.password}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      {emailAuthType === "signUp" && (
        <Input
          required
          name="passwordConfirmation"
          labelText="Password confirmation"
          type="password"
          value={values.passwordConfirmation}
          errorMessage={errors.passwordConfirmation}
          setErrorMessage={setFieldError}
          onChange={handleChange}
        />
      )}
      <ActButton
        color="green"
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        {authButtonTitle}
      </ActButton>
    </Form>
  )
}

export default memo(EmailAuthForm)
