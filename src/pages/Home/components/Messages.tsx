import { useQuery } from "@apollo/client"
import clsx from "clsx"
import React, { useContext } from "react"
import { GET_MESSAGES } from "../../../graphql/queries"
import { AuthContext } from "../../../context/authContext"

type MessagesProps = {
  conversationId: string | undefined
}

const Messages: React.FC<MessagesProps> = ({ conversationId }) => {
  const context = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: {
      conversationId,
    },
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-[2rem]">Error! {error.message}</h1>

  return (
    <ul className="absolute w-full bottom-0 right-0 left-0 px-4 flex flex-col gap-2">
      {data?.getMessages?.map((msg: Message, i: number) => (
        <li
          key={i}
          className={clsx(
            "w-full flex text-[1.5rem]",
            msg.senderId !== context?.user?.id ? "" : "justify-end"
          )}
        >
          <span
            className={clsx(
              "h-full bg-plain-gray text-white px-4 py-2",
              msg.senderId !== context?.user?.id
                ? "rounded-r-3xl rounded-l-md"
                : "rounded-l-3xl rounded-r-md"
            )}
          >
            {msg.body}
          </span>
        </li>
      ))}
    </ul>
  )
}
export default Messages
