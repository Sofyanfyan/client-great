"use client";
import Login from "@/components/login";
import Register from "@/components/register";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLogin, setLogin] = useState(true);

  const Content = () => {
    if (isLogin) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  return (
    <>
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <img
                    src="https://mymsjourney.co.za/wp-content/uploads/2018/04/cropped-g_logo.png"
                    loading="lazy"
                    className="w-12"
                    alt="tailus logo"
                  />
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to register
                  </h2>
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    students.
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="E-mail"
                      className="bg-gray-50 border 
                      border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="bg-gray-50 border 
                      border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <button
                        type="button"
                        className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border 
                        border-transparent bg-gray-200 text-white border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none 
                        dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p className="text-xs">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="#" className="underline">
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
