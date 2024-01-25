import React from "react"
import { FieldValues, useForm } from "react-hook-form"
import clsx from "clsx"

type AuthProps = {}

const Auth: React.FC<AuthProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>()

  return (
    <div className="lg:h-screen">
      <div className="bg-light-gray lg:h-3/4">
        <div className="h-full lg:max-w-[980px] mx-auto flex items-center">
          <div className="grid grid-cols-[auto_39.5rem] gap-[8rem] items-center">
            <div className="intro">
              <h1 className="logo-color text-[5.5rem] font-semibold font-poppins">
                friendsbook
              </h1>
              <p className="text-[2.5rem]">
                Friendsbook helps you connect and share with the people in your
                life
              </p>
            </div>
            <div className="card-shadow flex flex-col items-center min-h-[10rem] rounded-[1rem] bg-white p-8">
              <form className="flex flex-col w-full mb-6">
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  placeholder="Email Address"
                  className={clsx(
                    errors.email ? "mb-1" : "mb-4",
                    "border h-[5.2rem] rounded-lg text-[1.6rem] p-4"
                  )}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-400 text-left mb-6">
                    Email is Required.
                  </p>
                )}
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    validate: {
                      checkLength: (value) => value.length >= 6,
                      matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                          value
                        ),
                    },
                  })}
                  placeholder="Password"
                  className={clsx(
                    errors.email ? "mb-1" : "mb-4",
                    "border h-[5.2rem] rounded-lg text-[1.6rem] p-4"
                  )}
                />
                {errors.password?.type === "checkLength" && (
                  <p className="text-red-400 text-left mb-4">
                    Password should be at-least 6 characters
                  </p>
                )}
                {errors.password?.type === "matchPattern" && (
                  <p className="text-red-400 text-left mb-4">
                    Password should contain at least one uppercase letter,
                    lowercase letter, digit, and special symbol.
                  </p>
                )}
                <button type="submit" role="button" className="peach-button">
                  <span className="text">Login</span>
                </button>
              </form>
              <button className="text-[1.4rem] mb-6 text-blue">
                Forgotten password?
              </button>
              <hr className="w-full mb-6" />
              <button className="paste-button w-full text-[1.7rem]">
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10rem] lg:h-1/4"></div>
    </div>
  )
}
export default Auth
