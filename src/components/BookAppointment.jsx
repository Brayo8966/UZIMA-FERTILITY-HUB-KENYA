import { useState, useEffect } from "react";

function BookAppointment() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Auto scroll + highlight when coming from Hero
  useEffect(() => {
    if (window.location.hash === "#book-appointment") {
      window.history.replaceState(null, "", " ");
    }
  }, []);

  const isWithinWorkingHours = (dateStr, timeStr) => {
    if (!dateStr || !timeStr) return false;

    const [hourStr, minuteStr] = timeStr.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (Number.isNaN(hour) || Number.isNaN(minute)) return false;

    const day = new Date(`${dateStr}T${timeStr}`).getDay();

    // Sunday closed
    if (day === 0) return false;

    // Mon–Fri 9–17
    if (day >= 1 && day <= 5) {
      const afterOpen = hour > 9 || (hour === 9 && minute >= 0);
      const beforeClose = hour < 17 || (hour === 17 && minute === 0);
      return afterOpen && beforeClose;
    }

    // Saturday 9–14
    if (day === 6) {
      const afterOpen = hour > 9 || (hour === 9 && minute >= 0);
      const beforeClose = hour < 14 || (hour === 14 && minute === 0);
      return afterOpen && beforeClose;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!isWithinWorkingHours(date, time)) {
      setError(
        "Appointments only available Mon–Fri 9–5 and Sat 9–2."
      );
      return;
    }

    setError("");
    setSuccess("Your appointment request has been prepared.");

    const to = "uzimafertility@gmail.com";
    const subject = `Appointment Request - ${date || "No date"} at ${time || "No time"}`;

    const bodyLines = [
      "New appointment request:",
      "",
      `Name: ${fullName || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Date: ${date || "-"}`,
      `Time: ${time || "-"}`,
      "",
      "Reason:",
      reason || "-",
    ];

    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoLink;

    setFullName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setReason("");
  };

  return (
    <section
      className="book-appointment"
      id="book-appointment"
      data-aos="fade-up"
    >
      <div className="container book-appointment-container">
        <h2>Book an Appointment</h2>

        <p className="book-appointment-intro">
          Book your visit online in a few simple steps. We’ll confirm and guide you.
        </p>

        <div className="clinic-hours">
          <h3>Operating Hours</h3>

          <div className="hours-list">
            <div className="hours-item">
              <span className="hours-days">Monday – Friday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>

            <div className="hours-item">
              <span className="hours-days">Saturday</span>
              <span className="hours-time">9:00 AM – 2:00 PM</span>
            </div>
          </div>

          <p className="hours-note">
            Sundays and public holidays closed.
          </p>
        </div>

        {/* FORM ALWAYS VISIBLE NOW */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <textarea
            placeholder="Reason for visit (optional)"
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <button type="submit" className="hero-btn book-btn-primary">
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookAppointment;