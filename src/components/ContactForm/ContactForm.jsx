import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensagem enviada:', form);
    setStatus('Sua mensagem foi enviada com sucesso!');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
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
      <button type="submit" className="w-full bg-primary-light text-primary-dark font-bold py-2 rounded">
        Enviar
      </button>
      {status && <p className="text-center text-green-600 font-semibold mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
