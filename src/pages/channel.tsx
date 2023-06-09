import { useRouter } from "next/router";
import { Switch } from "../Components/features/SwitcherButton";

export default function Channel (){
    const history = useRouter();
    const handleClick = ()=> history.push("./channel/create")

    return(
        <Switch onClick={handleClick} name="Create channel" />
    )
}