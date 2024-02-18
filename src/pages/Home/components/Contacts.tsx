import React, { useState } from "react"
import { GET_ALL_USERS } from "../../../graphql/queries"
import { useQuery } from "@apollo/client"

import userIcon from "../../../assets/user.png"

type ContactsProps = {
  setUser: (user: User) => void
  setIsConvOpen: (isBool: boolean) => void
}

const Contacts: React.FC<ContactsProps> = ({ setUser, setIsConvOpen }) => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-[2rem]">Error! {error.message}</h1>

  const handleUserClick = (user: User) => {
    setIsConvOpen(true)
    setUser(user)
  }

  return (
    <ul className="flex flex-col">
      {data.getUsers.map((user: User) => (
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
      ))}
    </ul>
  )
}
export default Contacts
