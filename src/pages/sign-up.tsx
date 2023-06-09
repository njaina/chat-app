import React from "react"
import { useRouter } from "next/router";
import Form, {FormInputData} from "../Components/auth/RegistrationForm";
import { Switch } from "../Components/features/SwitcherButton";
import Head from "../Components/features/Header";
export default function SignUp  () {

  const history = useRouter();

  const handleFormSubmit = (formData: FormInputData) => {
    localStorage.setItem("formData", JSON.stringify(formData));
    history.push("/chat");
  };

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