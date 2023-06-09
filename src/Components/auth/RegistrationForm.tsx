import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';
import { registerUser } from '../../api/connexion/Registering';
import { useRouter } from 'next/router';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

interface PageProps {
  initialData: FormData;
}

export async function getServerProps() {
  const initialData: FormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
  };

  return {
    props: {
      initialData,
    },
  };
}

const Form: React.FC<PageProps> = ({ initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: initialData });

  const renderErrorMessage = (field: keyof FormData) => {
    return errors[field] && <span>This field is required</span>;
  };
  const history = useRouter();

  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registerUser(data);
      console.log('Utilisateur créé avec succès');
      history.push('/login')

    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur");
    }
  };
  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className={form_style.input}
        type="text"
        name="name"
        placeholder="Name"
        {...register('name', { required: true })}
      />
      {renderErrorMessage('name')}

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

      <input
        className={form_style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        {...register('confirmPassword', { required: true })}
      />
      {renderErrorMessage('confirmPassword')}

      <textarea
        className={form_style.bio}
        placeholder="About you"
        {...register('bio')}
      />

      <button className={form_style.regirsterButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
