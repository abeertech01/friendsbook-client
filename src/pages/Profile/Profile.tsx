import React from "react"
import { useParams } from "react-router-dom"

type ProfileProps = {}

const Profile: React.FC<ProfileProps> = () => {
  const param = useParams()
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{param.username}</h2>
    </div>
  )
}
export default Profile
