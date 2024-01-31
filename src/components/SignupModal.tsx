import clsx from "clsx"
import React, { memo } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FaQuestionCircle } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { CREATE_USER } from "../graphql/mutations"
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"

type SignupModalProps = {
  setSignupModalOpen: (isModal: boolean) => void
}

const SignupModal: React.FC<SignupModalProps> = ({ setSignupModalOpen }) => {
  const navigate = useNavigate()
  const [createUser, { loading }] = useMutation(CREATE_USER)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const { data } = await createUser({
        update(_, {}) {
          navigate("/")
        },
        variables: {
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        },
      })

      console.log("data ", data.createUser)
      reset()
    } catch (error) {
      console.log("error: ", error)
    }
  }

  return (
    <div className="fixed w-screen h-screen bg-[#eeeeeea5] flex justify-center items-center">
      <div className="w-[40rem] bg-white rounded-[0.7rem] card-shadow">
        <div className="px-8 py-6 flex justify-between items-start">
          <div>
            <h1 className="text-[3rem] font-semibold">Sign Up</h1>
            <p className="text-[1.4rem] text-gray-500">It's quick and easy</p>
          </div>
          <button onClick={() => setSignupModalOpen(false)}>
            <RxCross2 className="text-[2rem]" />
          </button>
        </div>
        <hr />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 py-6 flex flex-col w-full"
        >
          <div className="name gap-4 w-full grid grid-cols-2 mb-4">
            <input
              type="text"
              placeholder="First name *"
              {...register("firstName", {
                required: true,
                minLength: 2,
              })}
              className={clsx(
                "border rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray",
                errors.firstName?.type === "required"
                  ? "border-red-400"
                  : "border-gray-300"
              )}
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName")}
              className="border border-gray-300 rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray"
            />
          </div>
          <input
            type="text"
            placeholder="Username *"
            {...register("username", {
              required: true,
            })}
            className={clsx(
              "w-full border rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray mb-4",
              errors.username?.type === "required"
                ? "border-red-400"
                : "border-gray-300"
            )}
          />
          <input
            type="email"
            placeholder="Email address *"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            className={clsx(
              "w-full border rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray mb-4",
              errors.email?.type === "required"
                ? "border-red-400"
                : "border-gray-300"
            )}
          />
          <input
            type="password"
            placeholder="New password *"
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
            className={clsx(
              "w-full border rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray mb-4",
              errors.password?.type === "required"
                ? "border-red-400"
                : "border-gray-300"
            )}
          />
          <div className="mb-4">
            <h1 className="text-plain-gray mb-1 text-[1.2rem]">
              Gender <FaQuestionCircle className="inline-block" />
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <label
                htmlFor="male"
                className="text-[1.6rem] px-4 py-2 rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Male
                <input
                  type="radio"
                  id="male"
                  value="male"
                  {...register("gender")}
                />
              </label>
              <label
                htmlFor="female"
                className="text-[1.6rem] px-4 py-2 rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Female
                <input
                  type="radio"
                  id="female"
                  value="female"
                  {...register("gender")}
                />
              </label>
              <label
                htmlFor="other"
                className="text-[1.6rem] px-4 py-2 rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Other
                <input
                  type="radio"
                  id="other"
                  value="other"
                  {...register("gender")}
                />
              </label>
            </div>
          </div>
          <p className="text-plain-gray text-[1.1rem] [word-spacing:2px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            earum.
          </p>
          <p className="text-plain-gray text-[1.1rem] [word-spacing:2px] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
            quis maxime delectus amet perspiciatis nulla nostrum sapiente!
          </p>

          <button type="submit" className="paste-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
export default memo(SignupModal)
