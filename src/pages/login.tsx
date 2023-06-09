import { useRouter } from "next/router";
import Form, {FormInputData} from "../Components/Components/auth/Form";
import Auth from "../Components/Components/auth/GoogleAuth";
import Head from "../Components/Components/Header/Header";

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
