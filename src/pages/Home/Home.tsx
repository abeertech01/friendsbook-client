import { useQuery } from "@apollo/client"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GET_ALL_POSTS } from "../../graphql/queries"
import Post from "./components/Post"
import userIcon from "../../assets/user.png"
import PostModal from "./components/PostModal"

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const [isCreatePost, setIsCreatePost] = useState(false)
  const { loading, error, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-[2rem]">Error! {error.message}</h1>

  console.log(data.getPosts)

  return (
    <>
      {isCreatePost && <PostModal setIsCreatePost={setIsCreatePost} />}
      <div className="">
        <h1 className="text-[3rem] font-medium">Welcome to the home page</h1>
        <p className="text-[1.7rem]">
          Check out the Authentication -{" "}
          <Link to={"/auth"} className="text-blue underline">
            Auth
          </Link>
        </p>

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
        <div className="flex flex-col gap-[1.5rem] lg:max-w-[68rem] lg:mx-auto">
          {data.getPosts.map((post: Post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
