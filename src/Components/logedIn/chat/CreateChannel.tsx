import { useForm, SubmitHandler } from 'react-hook-form';
import Style from '../../../styles/Primary.module.css';
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
    <form className={Style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className={Style.input}
        type="text"
        name="channelName"
        placeholder="Channel Name"
        {...register('channelName', { required: true })}
      />
      {renderErrorMessage('channelName')}

      <select className={Style.input} name="type" {...register('type', { required: true })}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      {renderErrorMessage('type')}

      <button className={Style.createChannelButton} type="submit">
        Create Channel
      </button>
    </form>
  );
};

export default CreateChannelForm;
