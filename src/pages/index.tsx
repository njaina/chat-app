import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import Router from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const userAuth = localStorage.getItem('email');
    const userForm = localStorage.getItem('formData');

    if (userAuth || userForm) {
      Router.push('/profile');
    } else {
      Router.push('/login');
    }
  }, []);
return null
}
