import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  // setam starea initiala a componentei
  // state = {
  //   name: '',
  //   number: '',
  // };

  // handler - pt a actualiza "state" (pt a re-renderiza) cu
  // valorile introduse in campurile formularului
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // trimitere formular
  const handleSubmit = event => {
    //   impiedicare reincarcare formular la trimiterea datelor
    event.preventDefault();

    //destructuram starea componentei pt a obține valorile curente
    // ale câmpurilor name și number
    const { name, number } = formData;

    // adaugare contact
    onAddContact(name, number);

    // Resetare formularul după adăugarea contactului
    setFormData({
      name: '',
      number: '',
    });
  };
  const { name, number } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
        />
      </label>

      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
