import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    
    if (formData.fullName.trim().length < 3) {
      formErrors.fullName = 'Full name must be at least 3 characters long';
      isValid = false;
    }

   
    if (formData.subject.trim().length < 3) {
      formErrors.subject = 'Subject must be at least 3 characters long';
      isValid = false;
    }

 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

 
    if (formData.body.trim().length < 3) {
      formErrors.body = 'Message body must be at least 3 characters long';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='border border-black p-5'>
     
        <div className='d-flex justify-content-between my-5'>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

       
        <div className='d-flex justify-content-between my-5'>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

       
        <div className='d-flex justify-content-between my-5'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

       
        <div className='d-flex justify-content-between my-5'>
          <label htmlFor="body">Message:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
          {errors.body && <p className="error">{errors.body}</p>}
        </div>

       
        <div className='d-flex justify-content-center'>
          <button type="submit" className='btn btn-primary my-1'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;