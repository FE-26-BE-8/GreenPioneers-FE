import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './hubungi.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <h1>Hubungi Kami</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan subjek pesan"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Pesan</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Masukkan pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <div className="form-divider"></div>

        <div className="button-container">
          <Button variant="primary" type="submit">
            Kirim
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
