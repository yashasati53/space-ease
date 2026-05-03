export default function ReturnPolicy() {
  return (
    <div className="container" style={{ padding: "4rem 2rem", maxWidth: "800px" }}>
      <h1 className="heading-xl" style={{ marginBottom: "2rem" }}>Return Policy</h1>
      
      <div style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          At SpaceEase, we believe in sustainable comfort. If our products don't perfectly fit your space or lifestyle, we want to make it right.
        </p>

        <h2 className="heading-md" style={{ color: "var(--text-primary)", marginTop: "3rem", marginBottom: "1rem" }}>30-Day Space Trial</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          You have 30 days from the date of delivery to return any item. To be eligible for a full refund, the item must be in its original condition, unassembled (if applicable), and in its original eco-friendly packaging.
        </p>

        <h2 className="heading-md" style={{ color: "var(--text-primary)", marginTop: "3rem", marginBottom: "1rem" }}>Non-Returnable Items</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginBottom: "1.5rem" }}>
          <li>Custom-sized organizers</li>
          <li>Opened fragrance or wellness products (candles, incense) for hygiene reasons</li>
          <li>Gift cards</li>
        </ul>

        <h2 className="heading-md" style={{ color: "var(--text-primary)", marginTop: "3rem", marginBottom: "1rem" }}>Return Process</h2>
        <ol style={{ paddingLeft: "2rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Log into your SpaceEase account and select the order you wish to return.</li>
          <li style={{ marginBottom: "0.5rem" }}>Choose the reason for return and generate a free return shipping label.</li>
          <li style={{ marginBottom: "0.5rem" }}>Pack the item securely in its original packaging.</li>
          <li style={{ marginBottom: "0.5rem" }}>Drop it off at any partnered logistics center or schedule a home pickup.</li>
        </ol>

        <h2 className="heading-md" style={{ color: "var(--text-primary)", marginTop: "3rem", marginBottom: "1rem" }}>Refunds</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Once your return is received and inspected, we will send you an email notification. Approved refunds will be processed immediately, and a credit will automatically be applied to your original payment method within 5-7 business days.
        </p>

        <div style={{ marginTop: "4rem", padding: "2rem", backgroundColor: "var(--bg-secondary)", borderRadius: "12px", textAlign: "center" }}>
          <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>Need Help?</h3>
          <p>Contact our support team at <a href="mailto:support@spaceease.in" style={{ color: "var(--accent-terra)", textDecoration: "underline" }}>support@spaceease.in</a></p>
        </div>
      </div>
    </div>
  );
}
