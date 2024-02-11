import React, { ChangeEvent, useCallback, useState } from "react"
import userIcon from "../../../assets/user.png"
import { RxCross2 } from "react-icons/rx"
import clsx from "clsx"
import EmojiPicker from "emoji-picker-react"
import { BsEmojiSmile } from "react-icons/bs"
import { CREATE_POST } from "../../../graphql/mutations"
import { useMutation } from "@apollo/client"
import { GET_ALL_POSTS } from "../../../graphql/queries"

type PostModalProps = {
  user: User | null | undefined
  setIsCreatePost: (isCreatePost: boolean) => void
}

const PostModal: React.FC<PostModalProps> = ({ user, setIsCreatePost }) => {
  const [text, setText] = useState("")
  const [showPicker, setShowPicker] = useState(false)
  const [addPost, { loading }] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_ALL_POSTS,
      },
    ],
    variables: {
      content: text,
    },
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)

    // Adjust the height of the textarea based on its scroll height
    e.target.style.height = "auto" // Reset height to auto
    e.target.style.height = e.target.scrollHeight + "px" // Set height to scroll height
  }

  const onEmojiClick = (emojiObject: any, _: any) => {
    setText((prev) => prev + emojiObject.emoji)
    setShowPicker(false)
  }

  const handlePost = async () => {
    try {
      await addPost()

      console.log(text)
      setText("")
      setIsCreatePost(false)
    } catch (error) {
      console.log(error)
    }
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
            {user?.firstName && user?.firstName}{" "}
            {user?.lastName && user?.lastName}
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
        <div className="flex justify-end mx-[1.3rem] relative">
          {showPicker && (
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              style={{
                width: "35rem",
                height: "42rem",
                position: "absolute",
                bottom: 0,
                right: "3rem",
              }}
            />
          )}
          <button onClick={() => setShowPicker((val) => !val)}>
            <BsEmojiSmile className="text-[2.5rem]" />
          </button>
        </div>
        <button
          onClick={handlePost}
          className="text-[1.6rem] font-semibold paste-button m-[1.3rem] w-[calc(100%-2.6rem)]"
        >
          Post
        </button>
      </div>
    </div>
  )
}
export default PostModal
