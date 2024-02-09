import React, { ChangeEvent, useState } from "react"
import userIcon from "../../../assets/user.png"
import { RxCross2 } from "react-icons/rx"
import clsx from "clsx"

type PostModalProps = {
  setIsCreatePost: (isCreatePost: boolean) => void
}

const PostModal: React.FC<PostModalProps> = ({ setIsCreatePost }) => {
  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)

    // Adjust the height of the textarea based on its scroll height
    e.target.style.height = "auto" // Reset height to auto
    e.target.style.height = e.target.scrollHeight + "px" // Set height to scroll height
  }

  return (
    <div className="fixed w-screen h-screen bg-[#eeeeeea5] flex justify-center items-center">
      <div className="w-[50rem] bg-[#FFFFFF] card-shadow rounded-xl">
        <div className="relative lg:h-[6rem] flex justify-center items-center text-[1.8rem] font-semibold border-b">
          Create post
          <button
            onClick={() => setIsCreatePost(false)}
            className="absolute right-[1.3rem] w-[3.5rem] h-[3.5rem] rounded-full bg-[#dededea5] flex justify-center items-center"
          >
            <RxCross2 className="text-[2.5rem]" />
          </button>
        </div>
        <div className="px-[1.3rem] pt-[1.3rem] flex justify-start items-center">
          <img
            src={userIcon}
            alt="user icon"
            className="h-[4rem] inline-block mr-[0.7rem]"
          />
          <h1 className="text-[1.6rem]">
            {/* {post.author.firstName +
              (post.author.lastName ? " " + post.author.lastName : "")} */}
            Abdul Ahad Abeer
          </h1>
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          placeholder="What's on your mind, Abeer?"
          value={text}
          onChange={handleChange}
          className={clsx(
            "m-[1.3rem] w-[calc(100%-2.6rem)] outline-none resize-none h-auto",
            text.length <= 100 ? "text-[2.2rem]" : "text-[1.6rem]"
          )}
        />
        <button className="text-[1.6rem] font-semibold paste-button m-[1.3rem] w-[calc(100%-2.6rem)]">
          Post
        </button>
      </div>
    </div>
  )
}
export default PostModal
