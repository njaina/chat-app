import Head from 'next/head'
import {auth, google} from '../../../conf'
import { signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import style from './style.module.css'

const Auth: React.FC<{ onAuthenticate: () => void }> = ({ onAuthenticate }) => {
    const history = useRouter();
    const [value, setValue] = useState<string | null>('');
  
    const manageClick = () => {
      signInWithPopup(auth, google).then(data => {
        let email_data: string | null = data.user.email;
        console.log(typeof email_data + "  ***********************");
        setValue(email_data);
        localStorage.setItem("email", email_data || '');
        onAuthenticate();
      });
    };
  
    useEffect(() => {
      setValue(localStorage.getItem("email"));
    }, []);
    return (
        <>
          <Head>
            <title>Chat App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <button className={style.buttonClass} onClick={manageClick}>Authenticate with Google</button>
        </>
      );
    };
export default Auth;
    