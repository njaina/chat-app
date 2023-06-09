import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';

interface User {
    email: string;
    password: string;
  }

interface LoginProps {
  onLogin: SubmitHandler<User>;
}

const LoginForm: React.FC<LoginProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const renderErrorMessage = (field: keyof User) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleLoginSubmit: SubmitHandler<User> = (data) => {
    onLogin(data);
  };

  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleLoginSubmit)}>
      <input
        className={form_style.input}
        type="email"
        name="email"
        placeholder="Email address"
        {...register('email', { required: true })}
      />
      {renderErrorMessage('email')}

      <input
        className={form_style.input}
        type="password"
        name="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {renderErrorMessage('password')}

      <button className={form_style.loginButton} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
