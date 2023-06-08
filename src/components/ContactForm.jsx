import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/hubungi.css';

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <h1>Hubungi Kami</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan nama Anda" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email Anda" />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Masukkan subjek pesan" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Pesan</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Masukkan pesan Anda" />
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
}

export default ContactForm;
