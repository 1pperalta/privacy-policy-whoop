export default function HomePage() {
  return (
    <div className="shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <main className="page">
        <section className="hero card">
          <div className="eyebrow-row">
            <span className="eyebrow">Privacy Policy</span>
            <span className="pill">GitHub Pages ready</span>
          </div>

          <div className="hero-grid">
            <div>
              <h1>WHOOP Personal Dashboard</h1>
              <p className="lede">
                This application is a personal dashboard that connects to WHOOP
                using OAuth.
              </p>
            </div>

            <aside className="summary">
              <p className="summary-label">At a glance</p>
              <ul>
                <li>Personal use only</li>
                <li>No third-party sharing</li>
                <li>Access can be revoked anytime</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-grid">
          <article className="card section">
            <h2>Data Access</h2>
            <p>
              The application may access WHOOP data such as sleep, recovery,
              strain, workouts, heart rate, HRV, and profile information,
              depending on the permissions granted by the user.
            </p>
          </article>

          <article className="card section">
            <h2>How the Data Is Used</h2>
            <p>
              The data is used only to display personal analytics and insights
              inside the dashboard.
            </p>
          </article>

          <article className="card section">
            <h2>Sharing</h2>
            <p>
              The application does not sell, share, or transfer user data to
              third parties.
            </p>
          </article>

          <article className="card section">
            <h2>Revoking Access</h2>
            <p>
              Users may revoke access at any time from their WHOOP account or
              by contacting the app owner.
            </p>
          </article>

          <article className="card section contact">
            <h2>Contact</h2>
            <p>
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </p>
          </article>
        </section>

        <footer className="footer">
          <p>Last updated: July 5, 2026</p>
          <p>Hosted as a static export for GitHub Pages deployment.</p>
        </footer>
      </main>
    </div>
  );
}
