import React from "react"
import userIcon from "../../../assets/user.png"
import { IoCall } from "react-icons/io5"
import { HiVideoCamera } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import { PiPaperPlaneRightFill } from "react-icons/pi"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import { FaCirclePlus } from "react-icons/fa6"
import clsx from "clsx"

type ConversationProps = {
  user: User | undefined
  setIsConvOpen: (isBool: boolean) => void
}

const Conversation: React.FC<ConversationProps> = ({ user, setIsConvOpen }) => {
  return (
    <div className="fixed w-[32.5rem] h-[45.5rem] border right-[8rem] bottom-0 bg-white card-shadow rounded-t-2xl grid grid-rows-[4.5rem_auto_6rem]">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-[1rem] card-shadow-3">
        <div className="text-[1.6rem] font-medium">
          <img
            src={userIcon}
            alt="user icon"
            className="h-[3.4rem] inline-block mr-[0.7rem]"
          />
          {user?.firstName + (user?.lastName ? ` ${user.lastName}` : "")}
        </div>
        <div className="flex gap-1">
          <button className="w-[3rem] h-[3rem] text-plain-gray flex items-center justify-center rounded-full hover:bg-gray-100">
            <IoCall className="text-[2rem]" />
          </button>
          <button className="w-[3rem] h-[3rem] text-plain-gray flex items-center justify-center rounded-full hover:bg-gray-100">
            <HiVideoCamera className="text-[2rem]" />
          </button>
          <button
            onClick={() => setIsConvOpen(false)}
            className="w-[3rem] h-[3rem] text-plain-gray flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <RxCross1 className="text-[2rem]" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="w-full relative">
        <ul className="absolute w-full bottom-0 right-0 left-0 px-4 flex flex-col gap-2">
          {["message 1", "message 2", "message 3"].map((msg) => (
            <li
              className={clsx(
                "w-full flex text-[1.5rem]",
                msg.includes("3") ? "" : "justify-end"
              )}
            >
              <span
                className={clsx(
                  "h-full bg-plain-gray text-white px-4 py-2",
                  msg.includes("3")
                    ? "rounded-r-3xl rounded-l-md"
                    : "rounded-l-3xl rounded-r-md"
                )}
              >
                {msg}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Message input */}
      <div className="w-full grid grid-cols-[2.5rem_auto_2.5rem] gap-3 px-3 items-center">
        <span className="w-[2.2rem] h-[2.2rem] rounded-full flex items-center justify-center text-gray-400 text-[2rem]">
          <FaCirclePlus />
        </span>
        <div className="w-full bg-gray-200 h-[3.4rem] items-center px-4 rounded-full grid grid-cols-[auto_1.8rem]">
          <input
            type="text"
            className="text-[1.5rem] outline-none bg-transparent"
            placeholder="Aa"
          />
          <button className="text-gray-400">
            <BsFillEmojiSmileFill className="text-[1.8rem]" />
          </button>
        </div>
        <span className="w-[2.2rem] h-[2.2rem] rounded-full flex items-center justify-center text-gray-400 text-[2rem]">
          <PiPaperPlaneRightFill />
        </span>
      </div>
    </div>
  )
}
export default Conversation
