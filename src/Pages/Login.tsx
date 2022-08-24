//instalado com npm install react-hook-form
import { useForm } from "react-hook-form"

//instalado com npm i @hookform/resolvers
import { yupResolver } from "@hookform/resolvers/yup"

import { LoginSchema } from "../Schema/Index"
import { AuthContext, IuseAuth } from "../Provider/Authenticator"
import { useContext } from "react"


export interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useContext<IuseAuth>(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(LoginSchema),
  })

  const onSubmit = (data: UserData) => {
    signIn(data)
  }

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="Title">Entre agora mesmo!</h2>
      <label className="Nome">Nome</label>
      <input className="Name" type="text" {...register("email")} />
      {errors.email?.message}
      <label className="Senha">Senha</label>
      <input className="Password" type="password" {...register("password")} />
      {errors.password?.message}
        <button className="Btn" type="submit">Login</button>
    </form>
  )
}

export default Login