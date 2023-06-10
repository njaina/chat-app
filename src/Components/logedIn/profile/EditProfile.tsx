import { useForm, SubmitHandler } from 'react-hook-form';
import Style from '../../../styles/Primary.module.css';
import { updateProfile } from '../../../api/profile/editUserProfile';

interface EditProfileFormData {
  name: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  bio: string;
}


interface EditProfileFormProps {
  defaultValues: EditProfileFormData;
  onSubmit: SubmitHandler<EditProfileFormData>;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({ defaultValues });

  const renderErrorMessage = (field: keyof EditProfileFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<EditProfileFormData> = async (data) => {
    try {
      await updateProfile(data);
      onSubmit(data);
      console.log('Profil mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil', error);
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
        placeholder="Email"
        {...register('email', { required: true })}
      />
      {renderErrorMessage('email')}

      <input
        className={Style.input}
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        {...register('currentPassword', { required: true })}
      />
      {renderErrorMessage('currentPassword')}

      <input
        className={Style.input}
        type="password"
        name="newPassword"
        placeholder="New Password"
        {...register('newPassword', { required: true })}
      />
      {renderErrorMessage('newPassword')}

      <input
        className={Style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        {...register('confirmPassword', { required: true })}
      />
      {renderErrorMessage('confirmPassword')}

      <textarea className={Style.bio} name="bio" {...register('bio')} />

      <button className={Style.updateProfileButton} type="submit">
        Update Profile
      </button>
    </form>
  );
};

export default EditProfileForm;
