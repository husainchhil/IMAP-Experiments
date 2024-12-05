import React, { useState } from "react";
import '../App.css'

function RegistrationForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${details.name}, ${details.email}, ${details.password}`);
    setDetails({ name: "", email: "", password: "" });
  };

  return (
    <div class="RegistrationForm">
      <form onSubmit={handleSubmit}>
        <div><label>Name</label></div>
        <input type="text" name="name" value={details.name} onChange={handleChange} />
        <div><label>Email</label></div>
        <input type="email" name="email" value={details.email} onChange={handleChange} />
        <div><label>Password</label></div>
        <input type="password" name="password" value={details.password} onChange={handleChange} />
        <div><button type="submit">submit</button></div>
      </form>
    </div>
  );
}

export default RegistrationForm;
