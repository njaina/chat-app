import React from "react"
import { useRouter } from "next/router";
import Form from "../Components/auth/RegistrationForm";
import { Switch } from "../Components/features/SwitcherButton";
import Head from "../Components/features/Header";
import Style from '../styles/Primary.module.css'

export default function SignUp  () {

  const history = useRouter();
  const handleClick = () =>{
    history.push("/login")
  }
    return(
        <main className={Style.mainContainer}>
        <h2>Sign up here</h2>
        <Head title="sign-up"/>
        <Form/>
        <Switch className={Style.button} onClick={handleClick} name="Sign in" />
        </main>
    )
}