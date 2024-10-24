import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensagem enviada:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-primary-dark rounded shadow-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-primary-light text-primary-dark font-bold py-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
