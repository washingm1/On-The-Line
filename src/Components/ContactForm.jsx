import { useState } from "react";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_HOOK/";

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = {
  wrap: {
    fontFamily: "'DM Sans', sans-serif",
    width: "80%",
    marginLeft: "10%",
    padding: "1.5rem",
    boxSizing: "border-box",
    color: "#1a1a1a",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "0.75rem",
  },
  fieldWrap: {
    marginBottom: "0.75rem",
  },
  fieldLabel: {
    display: "block",
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "#888",
    marginBottom: "5px",
  },
  optionalTag: {
    fontSize: "10px",
    color: "#bbb",
    fontWeight: "400",
    marginLeft: "5px",
    textTransform: "none",
    letterSpacing: 0,
  },
  input: {
    width: "100%",
    padding: "0.65rem 0.9rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "5px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    boxSizing: "border-box",
    outline: "none",
    background: "#fff",
    display: "block",
    transition: "border-color 0.15s",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "0.65rem 0.9rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    resize: "vertical",
    boxSizing: "border-box",
    outline: "none",
    lineHeight: 1.6,
    display: "block",
    transition: "border-color 0.15s",
  },
  submitBtn: (ready, loading) => ({
    width: "100%",
    padding: "0.8rem",
    marginTop: "0.75rem",
    background: ready && !loading ? "#111" : "#e0e0e0",
    color: ready && !loading ? "#fff" : "#aaa",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: ready && !loading ? "pointer" : "default",
    fontFamily: "inherit",
    transition: "background 0.2s",
    letterSpacing: "0.01em",
  }),
  errorMsg: {
    fontSize: "12px",
    color: "#c0392b",
    marginTop: "0.5rem",
    textAlign: "center",
  },
  successWrap: {
    textAlign: "center",
    padding: "1.5rem 0",
  },
  successIcon: {
    fontSize: "2.5rem",
    marginBottom: "0.75rem",
  },
  successTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#111",
    margin: "0 0 0.4rem",
  },
  successSubtitle: {
    fontSize: "13px",
    color: "#888",
    margin: 0,
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const upd = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const isReady = () =>
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.reason.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isReady()) return;

    setLoading(true);
    setError(null);

    const payload = {
      firstName:  form.firstName,
      lastName:   form.lastName,
      fullName:   `${form.firstName} ${form.lastName}`,
      email:      form.email,
      phone:      form.phone || "Not provided",
      reason:     form.reason,
    };

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Success screen
  if (submitted) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <div style={s.wrap}>
          <div style={s.successWrap}>
            <div style={s.successIcon}>✅</div>
            <p style={s.successTitle}>Message sent!</p>
            <p style={s.successSubtitle}>We'll be in touch within 24 hours.</p>
          </div>
        </div>
      </>
    );
  }

  // ── Form
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={s.wrap}>
        <form onSubmit={handleSubmit}>

          {/* First & Last name side by side */}
          <div style={s.row}>
            <div>
              <label style={s.fieldLabel}>First name</label>
              <input
                style={s.input}
                type="text"
                placeholder="Jane"
                value={form.firstName}
                onChange={upd("firstName")}
                required
              />
            </div>
            <div>
              <label style={s.fieldLabel}>Last name</label>
              <input
                style={s.input}
                type="text"
                placeholder="Smith"
                value={form.lastName}
                onChange={upd("lastName")}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div style={s.fieldWrap}>
            <label style={s.fieldLabel}>Email</label>
            <input
              style={s.input}
              type="email"
              placeholder="jane@email.com"
              value={form.email}
              onChange={upd("email")}
              required
            />
          </div>

          {/* Phone (optional) */}
          <div style={s.fieldWrap}>
            <label style={s.fieldLabel}>
              Phone
              <span style={s.optionalTag}>optional</span>
            </label>
            <input
              style={s.input}
              type="tel"
              placeholder="(555) 000-0000"
              value={form.phone}
              onChange={upd("phone")}
            />
          </div>

          {/* Reason for inquiry */}
          <div style={s.fieldWrap}>
            <label style={s.fieldLabel}>Reason for inquiry</label>
            <textarea
              style={s.textarea}
              placeholder="Tell us what's on your mind..."
              value={form.reason}
              onChange={upd("reason")}
              required
            />
          </div>

          {error && <p style={s.errorMsg}>{error}</p>}

          <button
            type="submit"
            style={s.submitBtn(isReady(), loading)}
            disabled={!isReady() || loading}
          >
            {loading ? "Sending..." : "Send message →"}
          </button>

        </form>
      </div>
    </>
  );
}
