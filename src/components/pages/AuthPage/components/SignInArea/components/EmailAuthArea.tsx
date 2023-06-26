import EmailAuthForm from "./EmailAuthForm"

const EmailAuthArea = () => {
  return (
    <div>
      <div className="flex flex-col justify-center flex-1 min-h-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <EmailAuthForm />
        </div>
      </div>
    </div>
  )
}

export default EmailAuthArea
