import { useRouter } from "next/router";
import {FormInputData} from "../Components/auth/RegistrationForm";
import Auth from "../Components/auth/GoogleAuth";
import Head from "../Components/features/Header";
import LoginForm from "../Components/auth/LoginForm";
import { Switch } from "../Components/features/SwitcherButton";

const Login: React.FC = () => {

  const history = useRouter();

  const handleFormSubmit = (formData: FormInputData) => {
    localStorage.setItem("formData", JSON.stringify(formData));
    history.push("/chat");
  };

  const handleAuthenticate = () => {
    history.push("/chat");
  };

  const handleClick = () => {
    history.push("/sign-up")
  }

  return (
    <>
    
      <Head title="Login" />
      <main>
        <LoginForm onLogin={handleFormSubmit}/>
        <Switch onClick={handleClick} name="Sign up here" />
        <Auth onAuthenticate={handleAuthenticate} />
      </main>
    </>
  );
};

export default Login;
