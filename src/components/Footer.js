function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-columns">
        <div className="footer-column">
          <h3 className="logo">Little Lemon</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Chicago Ave, Chicago, IL</p>
          <p>(312) 555-0100</p>
          <p>hello@littlelemon.com</p>
        </div>

        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-copy">Copyright Little Lemon</p>
    </footer>
  );
}

export default Footer;
