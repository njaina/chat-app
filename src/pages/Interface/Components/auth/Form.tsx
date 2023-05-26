import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from '../style.module.css';

export interface FormInputData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormInputData>;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputData>();

  const renderErrorMessage = (field: keyof FormInputData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<FormInputData> = (data) => {
    onSubmit(data);
  };

  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className={form_style.input}
        type="text"
        placeholder="Name"
        {...register('name', { required: true })}
      />
      {renderErrorMessage('name')}

      <input
        className={form_style.input}
        type="email"
        placeholder="Email address"
        {...register('email', { required: true })}
      />
      {renderErrorMessage('email')}

      <input
        className={form_style.input}
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {renderErrorMessage('password')}

      <input
        className={form_style.input}
        type="password"
        placeholder="Confirm password"
        {...register('confirmPassword', { required: true })}
      />
      {renderErrorMessage('confirmPassword')}

      <textarea
        className={form_style.bio}
        placeholder="About you"
        {...register('bio')}
      />

      <button className={form_style.buttonClass} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
