import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';
import { editChannel } from '../../../api/channel/update'

interface EditChannelFormData {
  type: string;
}

interface EditChannelFormProps {
  onSubmit: SubmitHandler<EditChannelFormData>;
}

const EditChannelForm: React.FC<EditChannelFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditChannelFormData>();

  const renderErrorMessage = (field: keyof EditChannelFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<EditChannelFormData> = async (data) => {
    try {
      await editChannel('channelId', data); // Remplacez 'channelId' par l'ID du canal approprié
      onSubmit(data);
      console.log('Canal édité avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'édition du canal', error);
    }
  };

  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <select className={form_style.input} name="type" {...register('type', { required: true })}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      {renderErrorMessage('type')}

      <button className={form_style.editChannelButton} type="submit">
        Edit Channel
      </button>
    </form>
  );
};

export default EditChannelForm;
