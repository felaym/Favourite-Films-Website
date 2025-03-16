import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState < FormData > ({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/aqpi/contact/',
      headers: {},
      data: formData
    }).then(() => {
      toast.success("Data submitted Successfully !!!");
    }).catch(err => {
      toast.error(err.toString());
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='mx-auto w-50 mt-5'>
      <h1 className='text-center'>Contact US</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={formData.name}
            onChange={handleChange}
            name='name'
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={handleChange}
            name='email'
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={formData.phone}
            onChange={handleChange}
            name='phone'
            type="tel"
            placeholder="Enter phone"
            required
          />
        </Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          name='message'
          value={formData.message}
          onChange={handleChange}
          as="textarea"
          placeholder="Leave a message here"
          style={{ height: '100px' }}
          required
        />
        <Button className='my-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
