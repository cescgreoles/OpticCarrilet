import React, { useState } from "react";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here

    // Call the onSubmit function passed from the parent component
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    // Send formData to a server or perform any necessary actions
    console.log("Form submitted:", formData);
  };

  return (
    <body>
      <header>
        <BurgerMenu />
        <InfoNav />
        <Navbar />
      </header>
      <main>
        <ContactForm onSubmit={handleFormSubmit} />
      </main>
    </body>
  );
};

export default ContactPage;
