import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
export default function SignInPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-3">
      <div className="grid text-white md:h-full md:col-span-1 place-content-center bg-gray-950">
        <h1 className="text-5xl font-black">Board.</h1>
      </div>
      <div className="md:col-span-2 px-2 grid place-content-center bg-[#F5F5F5]">
        <div className="max-w-[20rem] sm:min-w-[25rem]">
          <h1 className="text-3xl font-medium">Sign In</h1>
          <p className="text-gray-500">Sign in to your account</p>

          <div className="flex flex-col justify-between gap-4 mt-6 sm:flex-row">
            <button className="flex items-center justify-center gap-1 px-3 py-1 bg-gray-200 shadow ring-1 ring-gray-400/20 sm:justify-normal rounded-xl">
              <span>
                <FcGoogle />
              </span>
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-1 px-3 py-1 bg-gray-200 shadow ring-1 ring-gray-400/20 sm:justify-normal rounded-xl">
              <span>
                <FaApple />
              </span>
              Sign in with Apple
            </button>
          </div>

          <form className="flex flex-col w-full gap-4 p-8 mt-6 bg-white shadow rounded-xl ring-1 ring-gray-400/10">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <input
                className="px-2 py-1 rounded-md ring-1 ring-gray-400/20 bg-gray-200/50"
                id="email"
                type="text"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="px-2 py-1 rounded-md ring-1 ring-gray-400/20 bg-gray-200/50"
                id="password"
                type="text"
                placeholder="******"
              />
            </div>

            <span className="text-blue-500">Forgot Password?</span>

            <button
              className="py-2 text-white rounded-md bg-gray-950"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <span className="text-blue-500">Register here</span>
          </p>
        </div>
      </div>
    </main>
  );
}
