import React, { useContext } from "react"
import userIcon from "../../../assets/user.png"
import { IoCall } from "react-icons/io5"
import { HiVideoCamera } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import { PiPaperPlaneRightFill } from "react-icons/pi"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import { FaCirclePlus } from "react-icons/fa6"
import { useMutation } from "@apollo/client"
import { ADD_MESSAGE } from "../../../graphql/mutations"
import { AuthContext } from "../../../context/authContext"
import Messages from "./Messages"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { GET_MESSAGES } from "../../../graphql/queries"

type ConversationProps = {
  user: User | undefined
  setIsConvOpen: (isBool: boolean) => void
}

const Conversation: React.FC<ConversationProps> = ({ user, setIsConvOpen }) => {
  const context = useContext(AuthContext)

  const { register, handleSubmit, watch } = useForm<FieldValues>()

  const message = watch("message")

  const onSubmit: SubmitHandler<FieldValues> = async (_) => {
    try {
      await addMessage()
    } catch (error) {
      console.log(error)
    }
  }

  const [addMessage, { loading }] = useMutation(ADD_MESSAGE, {
    refetchQueries: [
      {
        query: GET_MESSAGES,
      },
    ],
    variables: {
      body: message,
      conversationId: context?.conversation?.id,
      senderId: context?.user?.id,
    },
  })

  const handleAddMsg = async () => {}

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
        <Messages conversationId={context?.conversation?.id} />
      </div>

      {/* Message input */}
      {loading ? (
        "Loading..."
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-[2.5rem_auto_2.5rem] gap-3 px-3 items-center"
        >
          <span className="w-[2.2rem] h-[2.2rem] rounded-full flex items-center justify-center text-gray-400 text-[2rem]">
            <FaCirclePlus />
          </span>
          <div className="w-full bg-gray-200 h-[3.4rem] items-center px-4 rounded-full grid grid-cols-[auto_1.8rem]">
            <input
              type="text"
              placeholder="Aa"
              {...register("message")}
              className="text-[1.5rem] outline-none bg-transparent"
            />
            <button type="button" className="text-gray-400">
              <BsFillEmojiSmileFill className="text-[1.8rem]" />
            </button>
          </div>
          <button
            type="submit"
            onClick={handleAddMsg}
            className="w-[2.2rem] h-[2.2rem] rounded-full flex items-center justify-center text-gray-400 text-[2rem]"
          >
            <PiPaperPlaneRightFill />
          </button>
        </form>
      )}
    </div>
  )
}
export default Conversation
