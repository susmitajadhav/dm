//contactus.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUs = () => {
  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Simulate sending form data
      console.log('Form data:', values);

      // Display success message
      toast.success('Your message has been sent successfully!');

      // Reset form
      resetForm();
    },
  });

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.message && formik.errors.message ? 'input-error' : ''}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error-message">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
