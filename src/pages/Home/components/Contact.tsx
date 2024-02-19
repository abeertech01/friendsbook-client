import React, { useContext } from "react"
import userIcon from "../../../assets/user.png"
import { CREATE_CONVERSATION } from "../../../graphql/mutations"
import { AuthContext } from "../../../context/authContext"
import { useMutation } from "@apollo/client"

type ContactProps = {
  user: User
  setUser: (user: User) => void
  setIsConvOpen: (isBool: boolean) => void
}

const Contact: React.FC<ContactProps> = ({ user, setUser, setIsConvOpen }) => {
  const context = useContext(AuthContext)

  const [addConversation, { loading }] = useMutation(CREATE_CONVERSATION, {
    variables: {
      name: user?.firstName + (user?.lastName ? ` ${user.lastName}` : ""),
      isGroup: false,
      userIds: [context?.user?.id, user?.id],
    },
  })

  if (loading) return <h1>Loading...</h1>

  const handleUserClick = async (user: User) => {
    setIsConvOpen(true)
    setUser(user)
    try {
      const conversation = await addConversation()

      console.log(conversation)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li className="w-full text-[1.5rem] tracking-wide">
      <button
        onClick={() => handleUserClick(user)}
        className="flex items-center w-full px-[1rem] py-[0.75rem] hover:bg-gray-200 rounded-xl"
      >
        <img
          src={userIcon}
          alt="user icon"
          className="h-[3.8rem] inline-block mr-[0.7rem]"
        />
        {user.firstName + (user.lastName ? ` ${user.lastName}` : "")}
      </button>
    </li>
  )
}
export default Contact
