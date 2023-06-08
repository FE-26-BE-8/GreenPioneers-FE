import { connect } from 'react-redux';
import "../css/Contact.css";

const ContactInfo = ({ contactInfo }) => {
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

const mapStateToProps = (state) => {
  return {
    contactInfo: state,
  };
};

export default connect(mapStateToProps)(ContactInfo);
