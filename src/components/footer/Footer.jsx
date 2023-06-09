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
        <div class="footer-copyright">
                  <p>Copyright &copy; 2023 Green<span>Pioneers</span></p>
      </div>
      </div>

      <div className="footer-center">
        <ul>
        <h3>Tentang Kami</h3>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Syarat dan Ketentuan</a>
        </li>
        <li>
          <a href="#">Kebijakan Privasi</a>
        </li>
        <li>
          <a href="#">Kontak Kami</a>
        </li>
        </ul>
      </div>

      <div className="footer-right">
      <h3>Subscribe</h3>
        <form action="#">
          <div className="subscribe-form">
            <label htmlFor="form-name">Name</label> 
            <input
              type="text"
              name="name"
              id="form-name"
              placeholder="Input Name"
              required
            />
          </div>
          <div className="subscribe-form">
            <label htmlFor="form-email">Email</label> 
            <input
              type="email"
              name="email"
              id="form-email"
              placeholder="Input Email"
              required
            />
          </div>
          <button className="btn-submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
export default Footer;
