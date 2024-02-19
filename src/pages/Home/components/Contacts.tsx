import React from "react"
import { GET_ALL_USERS } from "../../../graphql/queries"
import { useQuery } from "@apollo/client"
import Contact from "./Contact"

type ContactsProps = {
  setUser: (user: User) => void
  setIsConvOpen: (isBool: boolean) => void
}

const Contacts: React.FC<ContactsProps> = ({ setUser, setIsConvOpen }) => {
  const { loading, error, data } = useQuery(GET_ALL_USERS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-[2rem]">Error! {error.message}</h1>

  return (
    <ul className="flex flex-col">
      {data.getUsers.map((user: User, i: number) => (
        <Contact
          key={i}
          user={user}
          setUser={setUser}
          setIsConvOpen={setIsConvOpen}
        />
      ))}
    </ul>
  )
}
export default Contacts
