import Sidebar from "../../Components/features/Sidebar"
import Style from '../../styles/Primary.module.css'

export default function (){
    return(
        <main className={Style.FlexContainer} >
        <Sidebar/>
        <h1>Channel create</h1>
        </main>
    )
}