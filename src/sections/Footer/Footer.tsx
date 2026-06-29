import styles from "./Footer.module.css";

import Container from "../../components/Container/Container";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.logo}>Break O' Clock</h2>

            <p className={styles.description}>
              Fresh coffee, handcrafted food, desserts, and memorable moments.
              Your favourite café in Boisar.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div>
            <h3>Visit Us</h3>

            <p>Near Boisar Station</p>
            <p>Boisar, Maharashtra</p>

            <br />

            <p>Open Daily</p>
            <p>11:00 AM – 10:00 PM</p>
          </div>

          <div>
            <h3>Contact</h3>

            <p>Instagram</p>
            <p>Google Maps</p>
            <p>Order Online</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 Break O' Clock. All rights reserved.
          </p>

          <p>
            Crafted with ❤️ for great coffee and great moments.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;