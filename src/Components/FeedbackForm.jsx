import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
    [name]:value
    });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const confirmationMessage = ` Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}`;
      
      const isConfirmed = window.confirm(confirmationMessage);
      if (isConfirmed) {
        console.log('Form submitted successfully!', formData);
        setFormData({
          name: '',
          email: '',
          feedback: '',
          rating: '',
        });
       alert('Form submitted successfully!');
      }};
       return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
      <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      />
      <input 
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}  />
      <textarea 
      name="feedback"
      placeholder="Your Feedback"
      value={formData.feedback}
      onChange={handleChange}  />
     <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Rate Us:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>
      <button type="submit">Submit</button>
      </form> 
      
      
    </>
  );
};

export default FeedbackForm;
