import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        serviceKey,
        templateKey,
        templateParams,
        publicKey,
      )
      .then(() => {
        toast.success("Mensagem enviada com sucesso!");
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        toast.error("Erro ao enviar o email.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-primary-dark rounded shadow-md space-y-4"
    >
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Nome"
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="E-mail"
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <textarea
        name="message"
        value={form.message}
        placeholder="Mensagem"
        onChange={handleChange}
        className="w-full p-3 border rounded"
        rows="4"
        required
      />
      <button
        type="submit"
        className="w-full bg-primary-light text-primary-dark font-bold py-2 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
