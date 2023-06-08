import React from 'react';
import "../components/Contact.css";

const contactInfo = {
  address: "Jalan Tanjung Priuk, no 801, Jakarta Selatan",
  contactPerson: "Khatirul Ihsan",
  phoneNumber: "+62-9384-2341",
  officeHours: "Senin-Kamis 08.00-17.00",
};

const ContactInfo = () => {
  const { address, contactPerson, phoneNumber, officeHours } = contactInfo;

  return (
    <div>
      <div className="address">
        <h2>Temukan Kami</h2>
        <p>{address}</p>
      </div>
      <div className="phone">
        <h2>Temukan Kami di Telepon</h2>
        <p>{contactPerson}</p>
        <p>{phoneNumber}</p>
        <p>{officeHours}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
