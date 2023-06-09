import { useRouter } from "next/router";
import Form, {FormInputData} from "../Components/auth/RegistrationForm";
import Auth from "../Components/auth/GoogleAuth";
import Head from "../Components/Header/Header";

const Login: React.FC = () => {

  const history = useRouter();

  const handleFormSubmit = (formData: FormInputData) => {
    localStorage.setItem("formData", JSON.stringify(formData));
    history.push("/chat");
  };

  const handleAuthenticate = () => {
    history.push("/chat");
  };

  return (
    <>
    
      <Head title="Login" />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Auth onAuthenticate={handleAuthenticate} />
      </main>
    </>
  );
};

export default Login;
