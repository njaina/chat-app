import { useRouter } from "next/router";
//import {FormInputData} from "../Components/auth/RegistrationForm";
import Auth from "../Components/auth/GoogleAuth";
import Head from "../Components/features/Header";
import LoginForm from "../Components/auth/LoginForm";
import { Switch } from "../Components/features/SwitcherButton";
import Style from '../styles/Primary.module.css'

const Login: React.FC = () => {

  const history = useRouter();

  const handleAuthenticate = () => {
    history.push("/profile");
  };

  const handleClick = () => {
    history.push("/sign-up")
  }

  return (
    <>
      <Head title="Login" />
      <main className={Style.mainContainer} >
        <h2>Log in here</h2>
        <LoginForm />
        <Switch className={Style.button} onClick={handleClick} name="Sign up here" />
        <Auth onAuthenticate={handleAuthenticate} />
      </main>
    </>
  );
};

export default Login;
