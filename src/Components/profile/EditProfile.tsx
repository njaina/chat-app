import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';

interface EditProfileFormData {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  bio: string;
}

interface EditProfileFormProps {
  onSubmit: SubmitHandler<EditProfileFormData>;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>();

  const renderErrorMessage = (field: keyof EditProfileFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<EditProfileFormData> = (data) => {
    onSubmit(data);
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
        placeholder="Email"
        {...register('email', { required: true })}
      />
      {renderErrorMessage('email')}

      <input
        className={form_style.input}
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        {...register('currentPassword', { required: true })}
      />
      {renderErrorMessage('currentPassword')}

      <input
        className={form_style.input}
        type="password"
        name="newPassword"
        placeholder="New Password"
        {...register('newPassword', { required: true })}
      />
      {renderErrorMessage('newPassword')}

      <input
        className={form_style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        {...register('confirmPassword', { required: true })}
      />
      {renderErrorMessage('confirmPassword')}

      <textarea className={form_style.bio} name="bio" {...register('bio')} />

      <button className={form_style.updateProfileButton} type="submit">
        Update Profile
      </button>
    </form>
  );
};

export default EditProfileForm;
