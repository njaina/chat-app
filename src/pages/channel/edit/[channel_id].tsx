import EditChannelForm from "../../../Components/logedIn/chat/EditChannel";

export function EditChannel (){
    const handleEditChannel = async (data) => {
      console.log(data);
    };

    return <EditChannelForm onSubmit={handleEditChannel} />;
}
