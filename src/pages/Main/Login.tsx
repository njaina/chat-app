import { useRouter } from "next/router";
import Head from "../Interface/Components/Header/Header";
import Form, {FormInputData} from "../Interface/Components/auth/Form";
import Auth from "../Interface/Components/auth/GoogleAuth";
import style from "../../@/styles/Login.module.css";

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
      <main className={style.container}>
        <Form onSubmit={handleFormSubmit} />
        <Auth onAuthenticate={handleAuthenticate} />
      </main>
    </>
  );
};

export default Login;
