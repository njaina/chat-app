import { useEffect } from 'react';
import Router from 'next/router';

export const Main = () =>{
    useEffect(() => {
        const userAuth = localStorage.getItem('email');
        const userForm = localStorage.getItem('formData');
    
        if (userAuth || userForm) {
          Router.push('/chat');
        } else {
          Router.push('/login');
        }
      }, []);
    return null
}