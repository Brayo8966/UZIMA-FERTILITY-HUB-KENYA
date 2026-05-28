export default function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <h1>
            Hope. Clarity. <span>The Right Care.</span> <br />
            Your Fertility Journey, <em>Guided</em>
          </h1>

          <div className="hero-points">

            <div className="hero-point">
              <span>💜</span>
              <p>
                Uzima Fertility Hub is a fertility coordination hub that helps you
                <strong> understand the real cause </strong>
                of your fertility challenges before any treatment.
              </p>
            </div>

            <div className="hero-point">
              <span>💜</span>
              <p>
                No blind management. No unnecessary treatment.
              </p>
            </div>

            <div className="hero-point">
              <span>💜</span>
              <p>
                We offer Intrauterine Insemination (IUI) for suitable cases.
                Not all couples who cannot conceive naturally need IVF.
              </p>
            </div>

          </div>

          <div className="hero-bottom-text">
            <p>
              Personalized care. Evidence-based decisions.
              Compassionate support.
            </p>

            <h4>
              Because every journey is unique. And every hope matters.
            </h4>
          </div>

          <div className="hero-buttons">

            <a href="#contact" className="hero-btn">
              Refer a Patient
            </a>

            <a href="#services" className="hero-btn outline">
              Learn About Our Services
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img
            src="/hero-couple.png"
            alt="image"
          />

          <div className="hero-floating-card">
            <p>We listen.</p>
            <p>We investigate.</p>
            <p>We guide.</p>

            <strong>You are not alone.</strong>
          </div>
        </div>

      </div>

      {/* FEATURE STRIP */}
      <div className="hero-strip">

        <div className="strip-card">
          <h4>💜Find the Real Cause</h4>
          <p>Investigate first, treat smart.</p>
        </div>

        <div className="strip-card">
          <h4>💜IUI – A Gentle Option</h4>
          <p>For suitable cases before considering IVF.</p>
        </div>

        <div className="strip-card">
          <h4>💜Not Every Case Needs IVF</h4>
          <p>Right treatment. Right time.</p>
        </div>

        <div className="strip-card">
          <h4>💜Whole-Person Care</h4>
          <p>Physical, emotional and counselling support.</p>
        </div>

        <div className="strip-card">
          <h4>💜Clinician-Led</h4>
          <p>Services guided by professional referral.</p>
        </div>

      </div>

    </section>
  );
}