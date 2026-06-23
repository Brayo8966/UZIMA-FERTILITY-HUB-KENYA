import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container">
        <h2>Contact Us</h2>
        <p>For fertility consultations, referrals or inquiries in Nairobi and Kisii, reach out using the details below.</p>

        <div className="contact-info">
          <a href="mailto:support@uzimafertility.co.ke">
            📧 support@uzimafertility.co.ke
          </a>
          <a href="tel:+254754727441">
            📞 0754 727 441
          </a>
        </div>

        <div className="contact-location">
          <h3>Location</h3>
          <p>Nairobi: Upperhill, Fortis Suites.</p>
          <p>Kisii Town, Elimu Center Building, 2nd Floor.</p>
        </div>

        {/* SOCIALS ADDED HERE */}
        <div className="contact-socials">
          <h3>Find Us & Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/uzima_fertility_hub?utm_source=qr&igsh=Z25heWZkdGtweTgw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@uzimafertilityhub?_r=1&_t=ZS-979iBVUPRi4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com/share/1JbrxMpWWL/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
