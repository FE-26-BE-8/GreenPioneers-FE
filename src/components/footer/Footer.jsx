// import ContactForm from "./components/ContactForm"
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <div className="logo-name1">
            <a href="#">Green</a>
          </div>
          <div className="logo-name2">
            <a href="#">Pioneers</a>
          </div>
        </div>
        <p className="footer-text">
          Dapatkan Informasi Terbaru, Terpercaya dan Terlengkap Terkait
          Lingkungan Hidup
        </p>
        <br></br>
        <p className="footer-text">
          GreenPioneers adalah sebuah website yang bertujuan untuk memberikan 
          pemahaman tentang masyarakat pentingnga menjaga ekosistem lingkungan 
          untuk bumi menjadi lebih baik
        </p>
        <div class="footer-copyright">
                  <p>Copyright &copy; 2023 Green<span>Pioneers</span></p>
      </div>
      </div>

      <div className="footer-center">
        <ul>
        <h3 className="footer-sub">Tentang Kami</h3>
        <li>
          <br></br>
          <Link to="/kontak">Kontak Kami</Link>
        </li>
        </ul>
      </div>

      <div className="footer-right">
      <h3 className="footer-sub">Contact Us</h3>
        <div className="contact-info">
          <p>Jalan Tanjung Priuk, no 801, Jakarta Selatan</p>
          <p>FE 26 & BE 8 </p>
          <p>+62-9384-2341</p>
          <p>Senin-Kamis 08.00-17.00</p>
          </div>
        </div>
    </footer>
  );
}
export default Footer;