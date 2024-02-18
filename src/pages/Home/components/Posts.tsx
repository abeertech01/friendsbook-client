import React from "react"
import { GET_ALL_POSTS } from "../../../graphql/queries"
import { useQuery } from "@apollo/client"
import Post from "./Post"

type PostsProps = {}

const Posts: React.FC<PostsProps> = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-[2rem]">Error! {error.message}</h1>

  return (
    <div className="flex flex-col gap-[1.5rem] lg:max-w-[68rem] lg:mx-auto">
      {data.getPosts.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default Posts
