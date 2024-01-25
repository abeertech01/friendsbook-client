import React from "react"
import { FaQuestionCircle } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

type SignupModalProps = {
  setSignupModalOpen: (isModal: boolean) => void
}

const SignupModal: React.FC<SignupModalProps> = ({ setSignupModalOpen }) => {
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
        <form className="px-8 py-6 flex flex-col w-full">
          <div className="name gap-4 w-full grid grid-cols-2 mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray"
              placeholder="First name"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray"
              placeholder="Last name"
            />
          </div>
          <input
            type="text"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray mb-4"
          />
          <input
            type="text"
            placeholder="New password"
            className="w-full border border-gray-300 rounded-[0.5rem] text-[1.6rem] px-4 py-2 bg-light-gray mb-4"
          />
          <div className="mb-4">
            <h1 className="text-plain-gray mb-1 text-[1.2rem]">
              Gender <FaQuestionCircle className="inline-block" />
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <label
                htmlFor="male"
                className="text-[1.6rem] px-4 py-2 border rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Male
                <input type="radio" name="male" id="male" value="male" />
              </label>
              <label
                htmlFor="female"
                className="text-[1.6rem] px-4 py-2 border rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Female
                <input type="radio" name="female" id="female" value="female" />
              </label>
              <label
                htmlFor="other"
                className="text-[1.6rem] px-4 py-2 border rounded-[0.5rem] border border-gray-300 flex justify-between"
              >
                Other
                <input type="radio" name="other" id="other" value="other" />
              </label>
            </div>
          </div>
          <p className="text-plain-gray text-[1rem] [word-spacing:2px] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            earum.
          </p>
          <p className="text-plain-gray text-[1rem] [word-spacing:2px] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
            quis maxime delectus amet perspiciatis nulla nostrum sapiente!
          </p>

          <button className="paste-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
export default SignupModal
