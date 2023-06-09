import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';
import axios from 'axios';

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
  // Effectuez des opérations côté serveur ici
  const initialData: FormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
  };

  // Renvoyer les données initiales en tant que propriétés à la page
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

  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/users', data);

      if (response.status === 200) {
        // L'utilisateur a été créé avec succès
        console.log('Utilisateur créé avec succès');
      } else {
        // Une erreur s'est produite lors de la création de l'utilisateur
        console.error('Erreur lors de la création de l\'utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête', error);
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
