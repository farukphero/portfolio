import React from "react";

const Login = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative bg-opacity-75 bg-primary">
           
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  “Strength does not come from physical capacity. It comes from
                  an indomitable will.”
                </h2>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white text-black rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Login for updates
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="Email"
                        required
                        type="email"
                        className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder=" Password"
                        required
                        type="password"
                        className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="font-medium  bg-gradient-to-r from-warning to-accent py-3 px-5 rounded-full w-full text-white"
                      >
                        Log In
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
