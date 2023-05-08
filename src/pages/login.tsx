import Head from 'next/head'
import style from '../styles/Login.module.css'
import Auth from './auth/googleAuth'
import Form from './auth/form';


const Login = ()=>{

    return(
        <>
        <Head>
        <title>Chat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.container}>
        <Form/>
        <Auth/>
        </main>
      </>
        
    )
}   
export default Login;