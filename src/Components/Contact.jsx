import React, {useRef, useState} from "react";
import { FaCheck } from "react-icons/fa";
import * as emailjs from "@emailjs/browser";
import {publicKey, serviceId, templateId} from "../api";

const Contact = () => {
  const [formData, setFormData] = useState({
      user_name: "",
      user_email: "",
      message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const sendEmail = (e) => {
      e.preventDefault();
      emailjs
          .sendForm(
              serviceId,
              templateId,
              e.target, {publicKey: publicKey})
          .then(
              (result) => {
                  console.log(result.text);
                  console.log('SUCCESS!');},
              (error) => {
                  console.log('FAILED...', error.text);},
          );
      setSubmitted(true);
  };


  return (
      <div className="contact-container">
        <h2>Contact Me</h2>
        {submitted ? (
            <p className="submitted-message" >Form has been submitted!</p>
        ) : (
            <form className="form-group" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="user_name"
                    id="name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="user_email"
                    id="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                  <div className='submit-btn-container'>
                      <button type="submit" value="Send" className="submit-btn">
                          {" "}
                          Submit
                          <FaCheck> </FaCheck>{" "}
                      </button>
                  </div>
              </div>

            </form>
        )}
      </div>
  );
};

export default Contact;
