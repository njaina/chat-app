import { useRouter } from "next/router";
import chatStyle from "./Chat.module.css"
const UnitChat = ()=>{
    const history = useRouter();
    const logout = ()=>{
        localStorage.clear();
        history.push('/login')
    }
    return (
        <main className={chatStyle.main} >
        welcome
        <button className={chatStyle.button} onClick={logout}>logout</button>
        </main>
    )
}
export default UnitChat;