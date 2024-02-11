/// <reference types="vite/client" />

interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

interface Post {
  id: string
  content: string
  authorId: string
  author: {
    firstName: string
    lastName: string
    usernames: string
  }
  createdAt: Date
}
