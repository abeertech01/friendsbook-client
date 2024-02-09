/// <reference types="vite/client" />

interface Post {
  id: string
  title: string
  content: string
  authorId: string
  author: {
    firstName: string
    lastName: string
    usernames: string
  }
  createdAt: Date
}
