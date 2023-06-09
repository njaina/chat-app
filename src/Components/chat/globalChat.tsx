import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';

interface SendMessageFormData {
  message: string;
}

interface SendMessageFormProps {
  onSubmit: SubmitHandler<SendMessageFormData>;
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessageFormData>();

  const renderErrorMessage = (field: keyof SendMessageFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<SendMessageFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form className={form_style.container} onSubmit={handleSubmit(handleFormSubmit)}>
      <textarea className={form_style.messageTextarea} name="message" {...register('message', { required: true })} />
      {renderErrorMessage('message')}

      <button className={form_style.sendMessageButton} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default SendMessageForm;
