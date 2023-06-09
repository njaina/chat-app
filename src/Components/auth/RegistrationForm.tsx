import { useForm, SubmitHandler } from 'react-hook-form';
import Style from '../../styles/Primary.module.css';
import { registerUser } from '../../api/connexion/Registering';
import { useRouter } from 'next/router';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const renderErrorMessage = (field: keyof FormData) => {
    return errors[field] && <span>This field is required</span>;
  };
  const history = useRouter();

  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registerUser(data);
      console.log('***OK***');
      history.push('/login')

    } catch (error) {
      console.error("****KO****");
    }
  };
  return (
    <form className={Style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className={Style.input}
        type="text"
        name="name"
        placeholder="Name"
        {...register('name', { required: true })}
      />
      {renderErrorMessage('name')}

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

      <input
        className={Style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        {...register('confirmPassword', { required: true })}
      />
      {renderErrorMessage('confirmPassword')}
      <button className={Style.regirsterButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
