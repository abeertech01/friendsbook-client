import React, { useContext, useState } from "react"
import userIcon from "../assets/user.png"
import { FaCircleChevronDown } from "react-icons/fa6"
import { IoLogOut } from "react-icons/io5"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  const [isDropdown, setIsDropdown] = useState(false)
  const context = useContext(AuthContext)

  const logout = () => {
    context?.logout()
    return <Navigate to={"/auth"} />
  }

  return (
    <div className="relative h-[5.5rem] bg-white card-shadow-3 flex items-center justify-end px-[1rem]">
      <div className="relative">
        <button onClick={() => setIsDropdown((prev) => !prev)}>
          <img
            src={userIcon}
            alt="user icon"
            className="h-[3.8rem] inline-block mr-[0.7rem] float-right"
          />
          <div className="absolute bottom-0 right-[0.7rem] bg-black rounded-full">
            <FaCircleChevronDown className="block text-gray-300 text-[1.7rem] border border-white rounded-full" />
          </div>
        </button>

        {isDropdown && (
          <div className="card-shadow-2 w-[36rem] min-h-[3rem] absolute -bottom-2 right-0 translate-y-full bg-white rounded-xl p-[0.8rem]">
            <ul>
              <li className="hover:bg-light-gray rounded-xl">
                <button
                  onClick={logout}
                  className="flex items-center text-[1.4rem] py-[0.4rem] px-[0.8rem] w-full"
                >
                  <span className="bg-gray-300 w-[3.2rem] h-[3.2rem] rounded-full flex items-center justify-center mr-4">
                    <IoLogOut className="text-[2.3rem]" />
                  </span>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header
