import React, { useEffect, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import clsx from "clsx"
import SignupModal from "../../components/SignupModal"

type AuthProps = {}

const Auth: React.FC<AuthProps> = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false)

  useEffect(() => {
    setSignupModalOpen(false)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data)

      reset()
    } catch (error) {
      console.log("error: ", error)
    }
  }

  return (
    <div className="lg:h-screen">
      {signupModalOpen && (
        <SignupModal setSignupModalOpen={setSignupModalOpen} />
      )}
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full mb-6"
              >
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
                  <p className="text-red-400 text-[1.3rem] text-left mb-6">
                    Email is Required.
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-400 text-[1.3rem] text-left">
                    Email is not valid.
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
                  <p className="text-red-400 text-[1.3rem] text-left mb-4">
                    Password should be at-least 6 characters
                  </p>
                )}
                {errors.password?.type === "matchPattern" && (
                  <p className="text-red-400 text-[1.3rem] text-left mb-4">
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
              <button
                onClick={() => setSignupModalOpen(true)}
                className="paste-button w-full text-[1.7rem]"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10rem] lg:h-1/4 lg:max-w-[980px] text-[1.3rem] py-6 text-justify mx-auto text-gray-400">
        <p className="[word-spacing:5px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          impedit!
        </p>{" "}
        <hr className="my-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, neque
          vel! Obcaecati sequi velit nobis esse sit, eveniet aspernatur
          exercitationem ducimus maxime magnam placeat illum facilis voluptate
          corporis dignissimos tempora libero. Perspiciatis ipsam, quas fuga
          repellat sapiente non natus et architecto quam, eius itaque deserunt
          neque voluptate pariatur at optio?
        </p>
      </div>
    </div>
  )
}
export default Auth
