import { useForm, SubmitHandler } from 'react-hook-form';
import Style from '../../styles/Primary.module.css';
import { loginUser } from '../../api/connexion/Login';
import { useRouter } from 'next/router';

interface User {
    email: string;
    password: string;
  }


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const renderErrorMessage = (field: keyof User) => {
    return errors[field] && <span>This field is required</span>;
  };

  const history = useRouter();

  const handleLoginSubmit: SubmitHandler<User> = async (data) => {
    try {
      await loginUser(data);
      console.log('*****OK*****');
      history.push("/profile")
    } catch (error) {
      console.error("****KO****");
    }

  };

  return (
    <form className={Style.container} onSubmit={handleSubmit(handleLoginSubmit)}>
      <input
        className={Style.input}
        type="email"
        name="email"
        placeholder="Email address"
        {...register('email', { required: true })}
      />
      {renderErrorMessage('email')}

      <input
        className={Style.input}
        type="password"
        name="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {renderErrorMessage('password')}

      <button className={Style.loginButton} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
