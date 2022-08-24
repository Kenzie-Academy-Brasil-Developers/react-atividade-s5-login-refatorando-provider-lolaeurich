import { createContext, ReactNode, useContext, useState } from "react"

//instalado com npm i react-router-dom
import { useNavigate } from "react-router-dom"

//instalado com yarn add axios
import axios from "axios"

import { UserData } from "../Pages/Login"


export const AuthContext = createContext<IuseAuth>({} as IuseAuth)

interface IUserProviderProps {
  children: ReactNode
}

export interface IuseAuth {
  authToken: string
  signIn: (userData: UserData) => void
  Logout: () => void
}

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate()

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  )

  const signIn = (userData: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        setAuthToken(response.data.token)
        navigate("/dashboard", { replace: true })
      })
      .catch((err) => console.log(err))
  }

  const Logout = () => {
    localStorage.clear()
    setAuthToken("")
    navigate("/login", { replace: true })
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}