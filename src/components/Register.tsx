"use client";
import { useState } from "react";
import Loading from "./btn/Loading";

export default function Register() {
  const [isHide, setHide] = useState(true);
  const [isSubmit, setSubmit] = useState(false);

  const [push, setPush] = useState({
    email: "",
    password: "",
    re_password: "",
    relation: "mother",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    re_password: "",
    relation: "",
  });

  const handleEventChange = (event: any) => {
    const { name, value } = event.target;

    setPush((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(push.email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const isValidPassword = passwordRegex.test(push.password);

    if (!push.email || !push.password) {
      if (!push.email) {
        setError((prevState) => ({
          ...prevState,
          email: "Please enter your email.",
        }));
      }
      if (!push.password) {
        setError((prevState) => ({
          ...prevState,
          password: "Please enter your password.",
        }));
      }

      return;
    }

    if (!isValidEmail || !isValidPassword) {
      setError((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address.",
      }));

      return;
    }

    setError({
      email: "",
      password: "",
      re_password: "",
      relation: "",
    });

    setSubmit(true);
  };

  return (
    <>
      <div className="mt-16 grid space-y-2">
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="bg-gray-50 border 
                      border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={push.email}
            onChange={handleEventChange}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Password
          </label>
          <div className="flex rounded-lg shadow-sm">
            <input
              type={isHide ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={push.password}
              onChange={handleEventChange}
            />
            <button
              type="button"
              className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border 
                        border-transparent bg-gray-300 text-white border-gray-30 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                setHide(!isHide);
              }}
            >
              {isHide ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Retype password
          </label>
          <div className="flex rounded-lg shadow-sm">
            <input
              type={isHide ? "password" : "text"}
              id="re_password"
              name="re_password"
              placeholder="Retype password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={push.re_password}
              onChange={handleEventChange}
            />
            <button
              type="button"
              className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border 
                        border-transparent bg-gray-300 text-white border-gray-30 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                setHide(!isHide);
              }}
            >
              {isHide ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-500">
          As a student's parent
        </label>
        <select
          id="default"
          name="relation"
          defaultValue={push.relation}
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          onChange={handleEventChange}
        >
          <option value="mother">Mother</option>
          <option value="father">Father</option>
        </select>
      </div>

      <div className="flex flex-col mt-20 space-y-5">
        {isSubmit ? (
          <Loading />
        ) : (
          <button
            type="button"
            className="text-white w-full bg-[#e4532f] hover:bg-[#e98369] focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2"
            onClick={() => setSubmit(true)}
          >
            Register
          </button>
        )}

        <div className="flex items-center justify-center border-t-[1px] border-t-slate-400 w-full relative">
          <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
        </div>
      </div>
    </>
  );
}
