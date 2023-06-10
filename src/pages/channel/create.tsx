import Sidebar from "../../Components/features/Sidebar"
import CreateChannelForm from "../../Components/logedIn/chat/CreateChannel"
import Styles from '../../styles/Primary.module.css'
import { createChannel } from "../../api/channel/createChannel"

export default function (){
    const handleSubmit = async (formData) => {
        try {
          await createChannel(formData);
          console.log('Canal créé avec succès');
        } catch (error) {
          console.error('Erreur lors de la création du canal', error);
        }
      };
    return(
        <main className={Styles.FlexContainer} >
        <Sidebar/>
        <h1>Channel create</h1>
        <CreateChannelForm onSubmit={handleSubmit}/>
        </main>
    )
}