import { LockClosedIcon } from '@heroicons/react/20/solid'
import { FormEvent } from 'react';

interface Props {
  inputs : {
    email: string,
    password: string
  };

  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e:FormEvent<HTMLButtonElement>) => void;
}



export default function LoginPageForm({inputs, handleChangeInput, handleClick} : Props){
    return (
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
                value={inputs.email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={inputs.password}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-yellow-500">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              onClick={handleClick}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
    )
}