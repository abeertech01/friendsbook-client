import React, { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import userIcon from "../../assets/user.png"
import PostModal from "./components/PostModal"
import { AuthContext } from "../../context/authContext"
import useAuth from "../../util/useAuth"
import { IoMdSearch } from "react-icons/io"
import { BsThreeDots } from "react-icons/bs"
import Posts from "./components/Posts"
import Contacts from "./components/Contacts"
import Conversation from "./components/Conversation"

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const [isConvOpen, setIsConvOpen] = useState(false)
  const [user, setUser] = useState<User | undefined>()
  const context = useContext(AuthContext)
  const { isAuthenticated } = useAuth()
  const [isCreatePost, setIsCreatePost] = useState(false)

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />
  }

  return (
    <>
      {isCreatePost && (
        <PostModal user={context?.user} setIsCreatePost={setIsCreatePost} />
      )}
      <div className="pt-[7.5rem] z-10">
        <div className="grid grid-cols-[3.8rem_auto] gap-[1rem] lg:max-w-[68rem] lg:mx-auto bg-[#FFFFFF] p-[1rem] rounded-xl mb-[1.5rem] card-shadow-2">
          <img
            src={userIcon}
            alt="user icon"
            className="h-[3.8rem] inline-block mr-[0.7rem]"
          />
          <button
            onClick={() => setIsCreatePost(true)}
            className="bg-[#F0F2F5] hover:bg-[#e4e6e9] h-[3.8rem] text-[#606266] text-[1.6rem] text-left px-[1.3rem] rounded-full"
          >
            What's on your mind, Abeer?
          </button>
        </div>
        <Posts />

        <div className="contacts bottom-2 w-[33.5rem] fixed right-0 top-[5.5rem] overflow-y-scroll">
          <h1 className="py-[1.7rem] px-[1rem] text-[1.8rem] text-plain-gray flex justify-between">
            <span>Contacts</span>

            <div className="flex gap-[1.5rem] items-center">
              <button className="w-[3rem] h-[3rem] hover:bg-gray-200 flex items-center justify-center rounded-full">
                <IoMdSearch className="text-[2rem]" />
              </button>

              <button className="w-[3rem] h-[3rem] hover:bg-gray-200 flex items-center justify-center rounded-full">
                <BsThreeDots />
              </button>
            </div>
          </h1>
          <Contacts setIsConvOpen={setIsConvOpen} setUser={setUser} />
        </div>

        {isConvOpen && (
          <Conversation user={user} setIsConvOpen={setIsConvOpen} />
        )}
      </div>
    </>
  )
}

export default Home
