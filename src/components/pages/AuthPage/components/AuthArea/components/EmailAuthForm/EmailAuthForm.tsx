"use client"

import { ActButton } from "@core"
import { memo } from "react"
import { Form, Input, useForm } from "src/core/client"
import { initialValues } from "./consts"
import validation from "./validation"
import { EmailAuthType } from "../../types"
import { useHandleEmailAuthSubmit } from "../../hooks"
import styles from "./EmailAuthForm.module.css"

interface IEmailAuthForm {
  emailAuthType: EmailAuthType
  authTypeSwitcherTitle: string
  authButtonTitle: string
  handleEmailAuthTypeChange: () => void
}

const EmailAuthForm = ({
  emailAuthType,
  authButtonTitle,
  authTypeSwitcherTitle,
  handleEmailAuthTypeChange,
}: IEmailAuthForm) => {
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

  const { mutate: callSignIn, isLoading, error } = useHandleEmailAuthSubmit()

  return (
    <Form
      onSubmit={handleSubmit}
      postSubmitError={error as any} // TODO: Remove any
    >
      <Input
        withShadow
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
        withShadow
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
          withShadow
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
      <div className="flex items-center gap-2 mb-10">
        <span className={styles.emailAuthForm_authModePart}>
          {authTypeSwitcherTitle}
        </span>
        <button
          className={styles.emailAuthForm_authModeSwitch}
          onClick={handleEmailAuthTypeChange}
        >
          {emailAuthType === "signIn" ? "Sign up" : "Sign in"}
        </button>
      </div>
      <ActButton type="submit" bigActButton isLoading={isLoading}>
        Get Started!
      </ActButton>
    </Form>
  )
}

export default memo(EmailAuthForm)
