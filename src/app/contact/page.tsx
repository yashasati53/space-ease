export default function ContactPage() {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem 6rem" }}>

      {/* Page Header */}
      <div style={{ padding: "4rem 0 3rem", borderBottom: "1px solid #e8e8e8", marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#737373", marginBottom: "0.75rem" }}>
          SpaceEase
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 100, lineHeight: 1.05 }}>
          Contact Us
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

        {/* Left — Contact Info */}
        <div>
          <h2 style={{ fontSize: "1rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2rem" }}>
            Get in Touch
          </h2>

          {[
            {
              icon: "📍",
              label: "Visit Us",
              lines: ["SpaceEase Organisers Pvt. Ltd.", "4th Floor, Kohinoor Square,", "Dadar, Mumbai 400028"],
            },
            {
              icon: "📞",
              label: "Call Us",
              lines: ["+91 98765 43210", "Mon–Sat, 10am – 7pm IST"],
            },
            {
              icon: "✉️",
              label: "Email Us",
              lines: ["support@spaceease.in", "We reply within 24 hours"],
            },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
              <span style={{ fontSize: "1.25rem", marginTop: "0.1rem" }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{item.label}</p>
                {item.lines.map(line => (
                  <p key={line} style={{ fontSize: "0.88rem", color: "#737373", fontWeight: 300, lineHeight: 1.7 }}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Social */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e8e8e8" }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem" }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {["Instagram", "Pinterest", "LinkedIn"].map(social => (
                <a key={social} href="#" style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #000",
                  paddingBottom: "1px",
                  color: "#000",
                }}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div>
          <h2 style={{ fontSize: "1rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2rem" }}>
            Send a Message
          </h2>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", fontWeight: 500 }}>
                  First Name <span style={{ color: "#000" }}>*</span>
                </label>
                <input type="text" required placeholder="Aarav" style={{
                  width: "100%", padding: "0.85rem 1rem", border: "1px solid #e8e8e8",
                  fontSize: "0.88rem", fontFamily: "inherit", outline: "none", borderRadius: "0",
                }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", fontWeight: 500 }}>
                  Last Name
                </label>
                <input type="text" placeholder="Sharma" style={{
                  width: "100%", padding: "0.85rem 1rem", border: "1px solid #e8e8e8",
                  fontSize: "0.88rem", fontFamily: "inherit", outline: "none", borderRadius: "0",
                }} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", fontWeight: 500 }}>
                Email Address <span style={{ color: "#000" }}>*</span>
              </label>
              <input type="email" required placeholder="aarav@example.com" style={{
                width: "100%", padding: "0.85rem 1rem", border: "1px solid #e8e8e8",
                fontSize: "0.88rem", fontFamily: "inherit", outline: "none", borderRadius: "0",
              }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", fontWeight: 500 }}>
                Subject
              </label>
              <select style={{
                width: "100%", padding: "0.85rem 1rem", border: "1px solid #e8e8e8",
                fontSize: "0.88rem", fontFamily: "inherit", outline: "none", borderRadius: "0",
                backgroundColor: "#fff", color: "#000", appearance: "none",
              }}>
                <option>Order Enquiry</option>
                <option>Product Question</option>
                <option>Returns & Refunds</option>
                <option>Business / B2B</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", fontWeight: 500 }}>
                Message <span style={{ color: "#000" }}>*</span>
              </label>
              <textarea required rows={5} placeholder="How can we help you?" style={{
                width: "100%", padding: "0.85rem 1rem", border: "1px solid #e8e8e8",
                fontSize: "0.88rem", fontFamily: "inherit", outline: "none", borderRadius: "0",
                resize: "vertical",
              }} />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", padding: "0.9rem 2.5rem" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
