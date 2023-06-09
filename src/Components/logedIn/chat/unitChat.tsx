// import { useRouter } from "next/router";
// import chatStyle from "./Chat.module.css"
// const UnitChat = ()=>{
//     const history = useRouter();
//     const logout = ()=>{
//         localStorage.clear();
//         history.push('/login')
//     }
//     return (
//         <main className={chatStyle.main} >
//         welcome
//         <button className={chatStyle.button} onClick={logout}>logout</button>
//         </main>
//     )
// }
// export default UnitChat;
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import form_style from './style.module.css';

interface SendMessageFormData {
  message: string;
}

const SendMessageForm: React.FC = () => {
  const router = useRouter();
  const { user_id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessageFormData>();

  const renderErrorMessage = (field: keyof SendMessageFormData) => {
    return errors[field] && <span>This field is required</span>;
  };

  const handleFormSubmit: SubmitHandler<SendMessageFormData> = (data) => {
    // Envoyer le message en utilisant les données (data) et l'identifiant de l'utilisateur (user_id)
    console.log('Message sent:', data.message);
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
