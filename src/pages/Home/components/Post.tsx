import React from "react"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import userIcon from "../../../assets/user.png"
import clsx from "clsx"

type PostProps = {
  post: Post
}

TimeAgo.addDefaultLocale(en)

const Post: React.FC<PostProps> = ({ post }) => {
  const timeAgo = new TimeAgo("en-US")

  return (
    <div className="w-full rounded-xl p-4 bg-[#FFFFFF] card-shadow-2">
      <div className="heading flex justify-start items-center mb-[0.5rem]">
        <img
          src={userIcon}
          alt="user icon"
          className="h-[4rem] inline-block mr-[0.7rem]"
        />
        <div className="inline-block">
          <h1 className="text-[1.6rem]">
            {post.author.firstName +
              (post.author.lastName ? " " + post.author.lastName : "")}
          </h1>
          <p className="text-[1.2rem]">
            {timeAgo.format(post.createdAt, "round")}
          </p>
        </div>
      </div>
      <div>
        <p
          className={clsx(
            post.content.length <= 100 ? "text-[2.2rem]" : "text-[1.6rem]"
          )}
        >
          {post.content}
        </p>
      </div>
    </div>
  )
}
export default Post
