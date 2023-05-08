import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import form_style from './style.module.css'

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

const Form = () => {
  const history = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    history.push('/chat')
  };

  return (
    <form className={form_style.container } onSubmit={handleSubmit}>
      <input
        className={form_style.input}
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
      />

      <input
        className={form_style.input}
        type="email"
        name="email"
        placeholder="Email address"
        onChange={handleChange}
        value={formData.email}
      />

      <input
        className={form_style.input}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />

      <input
        className={form_style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        onChange={handleChange}
        value={formData.confirmPassword}
      />

      <textarea className={form_style.bio} placeholder="About you" name="bio" onChange={handleChange} value={formData.bio} />

      <button className={form_style.buttonClass} type="submit">Submit</button>
    </form>
  );
};

export default Form;
