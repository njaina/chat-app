import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';

interface CreateChannelFormData {
  channelName: string;
  type: string;
}

interface CreateChannelFormProps {
  onSubmit: SubmitHandler<CreateChannelFormData>;
}

const CreateChannelForm: React.FC<CreateChannelFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChannelFormData>();

  const renderErrorMessage = (field: keyof CreateChannelFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<CreateChannelFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className={form_style.input}
        type="text"
        name="channelName"
        placeholder="Channel Name"
        {...register('channelName', { required: true })}
      />
      {renderErrorMessage('channelName')}

      <select className={form_style.input} name="type" {...register('type', { required: true })}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      {renderErrorMessage('type')}

      <button className={form_style.createChannelButton} type="submit">
        Create Channel
      </button>
    </form>
  );
};

export default CreateChannelForm;
