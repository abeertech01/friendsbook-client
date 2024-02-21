import { jwtDecode } from "jwt-decode"
import React, { createContext, useReducer } from "react"

interface InitialStateType {
  user: null | User
  login: (token: string) => void
  logout: () => void
  conversation: null | Conversation
  setConversation: (conversation: Conversation) => void
}

const initialState: InitialStateType = {
  user: null,
  login: (_: string) => {},
  logout: () => {},
  conversation: null,
  setConversation: (_: Conversation) => {},
}

type AuthProviderProps = {
  children: React.ReactNode
}

if (localStorage.getItem("token")) {
  const decodedToken = jwtDecode(localStorage.getItem("token") as string)

  initialState.user = decodedToken as User | null
}

type AuthContextType = {
  user: null | User
  login: (token: string) => void
  logout: () => void
  conversation: null | Conversation
  setConversation: (conversation: Conversation) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type ACTIONTYPE =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT"; payload: null }
  | { type: "SET_CONV"; payload: Conversation }

const authReducer = (state: InitialStateType, action: ACTIONTYPE) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      }
    case "SET_CONV":
      return {
        ...state,
        conversation: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = async (token: string) => {
    await localStorage.setItem("token", token)
    const decodedToken: User = await jwtDecode(token)
    await dispatch({
      type: "LOGIN",
      payload: decodedToken,
    })
  }

  const logout = () => {
    localStorage.removeItem("token")
    dispatch({
      type: "LOGOUT",
      payload: null,
    })
  }

  const setConversation = (conversation: Conversation) => {
    console.log(conversation)

    dispatch({
      type: "SET_CONV",
      payload: conversation,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
        conversation: state.conversation,
        setConversation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
