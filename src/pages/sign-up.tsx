import React from "react"
import { useRouter } from "next/router";
import Form from "../Components/auth/RegistrationForm";
import { Switch } from "../Components/features/SwitcherButton";
import Head from "../Components/features/Header";
export default function SignUp  () {

  const history = useRouter();



  const handleClick = () =>{
    history.push("/login")
  }
    return(
        <>
        <Head title="sign-up"/>
        <Form/>
        <Switch onClick={handleClick} name="Sign in" />
        </>
    )
}