import { useState, useEffect } from 'react';
import {auth, google} from './conf'
import { signInWithPopup } from 'firebase/auth';
import Chat from './chat';


const Login = ()=>{
const [value,setValue] = useState<string|null>('');
const manageClick = ()=>{
    signInWithPopup(auth,google).then(data=>{
    let email_data:string|null = data.user.email;
    console.log(typeof email_data+"  ***********************")
    setValue(email_data)
    localStorage.setItem("email", email_data || '')
    })
}
useEffect(()=>{
    setValue(localStorage.getItem("email"))
})
    return(
        <>
        {value?<Chat/>:
        <button onClick={manageClick} >Click</button>}
        </>
    )
}   
export default Login;