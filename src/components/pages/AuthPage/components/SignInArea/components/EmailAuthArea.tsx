import { Input } from 'src/core/client'
import { colors } from 'src/core/theme'

const EmailAuthArea = () => {
  return (
    <div>
      <div className="flex flex-col justify-center flex-1 min-h-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST">
            <Input
              required
              value=""
              name="email"
              labelText="Email"
              onChange={() => { }}
            />

            <div>
              <div className="flex items-center justify-between">
                {/* <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label> */}
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" style={{ color: colors.darkGreen }}>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  required
                  type="password"
                  value=""
                  name="password"
                  labelText="Unique password"
                  onChange={() => { }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{ backgroundColor: colors.darkGreen }}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" style={{ color: colors.darkGreen }}>
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailAuthArea