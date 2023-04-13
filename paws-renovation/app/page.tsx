"use client";

import { useContext, useState } from "react";
import LoginPageForm from "./loginComponents/LoginPageForm";
import useAuth from "../hooks/useAuth";
import { AuthenticationContext } from "./context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
//import { useRouter } from "next/router";

export default function LoginForm() {
  const { signin } = useAuth();
  const { error, loading, data} = useContext(
    AuthenticationContext
  );

  //const router = useRouter();
  const handleSuccess = () => {
    console.log("hello")
  };

  const handleClick = () => {
    signin({ email: inputs.email, password: inputs.password }, handleSuccess);
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {error ? <Alert severity="error">{error}</Alert> : null}
            <div>
              <img
                className="mx-auto h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/uwmpost.com/wp-content/uploads/2016/11/paws.1.u.png?ssl=1"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-yellow-500">
                Sign in to your account
              </h2>
            </div>
            <LoginPageForm
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </>
  );
}