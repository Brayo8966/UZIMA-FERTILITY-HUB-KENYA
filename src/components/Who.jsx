export default function Who() {
  return (
    <section className="who" id="who" data-aos="fade-up">
      <div className="container who-container">

        <div className="who-text">

          <h2>About Us</h2>

          <p>
            At Uzima Fertility Hub, we believe infertility should never be managed blindly.
          </p>

          <p>
            That is why we offer comprehensive fertility evaluation for both men and women,
            to help identify the possible underlying cause and guide the right treatment approach.
          </p>

          <p>
            Not every couple struggling to conceive will need IVF.
            Some couples may benefit from Assisted Reproductive Technology such as IUI.
          </p>

          <p>
            IUI is a simple fertility procedure where specially prepared sperm
            is placed into the uterus during ovulation to increase the chances of conception.
          </p>

          <p>
            Accessible nationwide via online consultations and physically at our
            Kisii hub and trusted partner doctors in Nairobi.
          </p>

        </div>

        <div className="who-features">

          {[
            "Referral-based",
            "Clinician-led",
            "Ethical care",
            "Accessible IUI",
            "Affordable IUI"
          ].map((item, i) => (

            <div
              className="who-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              <span className="who-card-label">
                {item}
              </span>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}