import { useContext } from "react"
import { AuthContext, IuseAuth } from "../Provider/Authenticator"

const Dashboard = () => {
  const { Logout } = useContext<IuseAuth>(AuthContext)
  return (
    <>
    <div className="Div">
      <img className="Image"
        src="https://media1.giphy.com/media/3o6fIQR7IWWelbesec/giphy.gif?cid=790b7611c381d14fb0e44e1a3c7044bac8c32984fcd83762&rid=giphy.gif&ct=g"
        alt="LD"
      />
      <button className="BtnClose" onClick={Logout}>Sair</button>
      </div>
    </>
  )
}

export default Dashboard