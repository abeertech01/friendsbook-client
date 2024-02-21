/// <reference types="vite/client" />

interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

interface Conversation {
  id: string
  createdAt: Date
  lastMessageAt: Date
  name: string
  isGroup: boolean
  messages?: Message[]
  userIds: string[]
}

interface Message {
  id: string
  createdAt: Date
  body: string
  conversationId: string
  seen?: User[]
  senderId: string
  sender: User
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
