import { useEffect } from 'react';
import Router from 'next/router';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      Router.push('/chat');
    } else {
      Router.push('/login');
    }
  }, []);
  return (
    null
  )
}
