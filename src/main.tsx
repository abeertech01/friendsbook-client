import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "./utilities.css"
import { ApolloProvider } from "@apollo/client"
import { AuthProvider } from "./context/authContext.tsx"
import client from "./apolloClient.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
)
