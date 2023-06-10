import Sidebar from "../../Components/features/Sidebar"
import CreateChannelForm from "../../Components/logedIn/chat/CreateChannel"
import Styles from '../../styles/Primary.module.css'
import { createChannel } from "../../api/channel/createChannel"
import { useState } from "react";

export default function (){
    const [createdChannelId, setCreatedChannelId] = useState('');
    const handleSubmit = async (formData) => {
        try {
          const createdChannel = await createChannel(formData);
          await createChannel(formData);
          console.log('Canal créé avec succès');
          setCreatedChannelId(createdChannel)
        } catch (error) {
          console.error('Erreur lors de la création du canal', error);
        }
      };
    return(
        <main className={Styles.FlexContainer} >
        <Sidebar/>
        <div>
        <h1>Channel create</h1>
        <CreateChannelForm onSubmit={handleSubmit}/>
        {createdChannelId && (
          <div>{createdChannelId}</div>
        )}
        </div>
        </main>
    )
}