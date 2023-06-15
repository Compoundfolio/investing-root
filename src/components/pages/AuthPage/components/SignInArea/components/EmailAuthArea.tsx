import React from 'react'
import { colors } from 'src/core/theme'

const EmailAuthArea = () => {
  return (
    <div>
      <div className="flex flex-col justify-center flex-1 min-h-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST">
            {/* <Input /> */}
            {/* <Input /> */}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" style={{ color: colors.darkGreen }}>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='*****************'
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
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