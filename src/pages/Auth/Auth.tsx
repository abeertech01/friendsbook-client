import React, { useContext, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import clsx from "clsx"
import SignupModal from "../../components/SignupModal"
import { GET_USER_TOKEN } from "../../graphql/queries"
import { useLazyQuery } from "@apollo/client"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import useAuth from "../../util/useAuth"

type AuthProps = {}

const Auth: React.FC<AuthProps> = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const context = useContext(AuthContext)
  const [getToken, { loading }] = useLazyQuery(GET_USER_TOKEN)
  const [signupModalOpen, setSignupModalOpen] = useState(false)

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }

  useEffect(() => {
    setSignupModalOpen(false)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const { data } = await getToken({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      })

      if (data.getUserToken) {
        context?.login(data.getUserToken)
        reset()
        navigate("/")
      }
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
                    "border outline-none h-[5.2rem] rounded-lg text-[1.6rem] p-4"
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
                  })}
                  placeholder="Password"
                  className={clsx(
                    errors.password ? "mb-1" : "mb-4",
                    "border outline-none h-[5.2rem] rounded-lg text-[1.6rem] p-4"
                  )}
                />
                <button
                  type="submit"
                  disabled={loading}
                  role="button"
                  className="peach-button"
                >
                  {loading ? "Loading..." : <span className="text">Login</span>}
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
