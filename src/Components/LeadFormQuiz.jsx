import { useState } from "react";
const config = require('../private_links.json');

// ─── CONFIG — swap these out ──────────────────────────────────────────────────
const EMAIL_WEBHOOK = config.ZAPIER_EMAIL_LINK;
const TRAINERIZE_WEBHOOK = config.ZAPIER_TRAINERIZE_LINK;
// ─── Data ─────────────────────────────────────────────────────────────────────
const areaCodes = [
  { code: "+1",   flag: "🇺🇸" },
  { code: "+44",  flag: "🇬🇧" },
  { code: "+61",  flag: "🇦🇺" },
  { code: "+64",  flag: "🇳🇿" },
  { code: "+353", flag: "🇮🇪" },
  { code: "+27",  flag: "🇿🇦" },
  { code: "+49",  flag: "🇩🇪" },
  { code: "+33",  flag: "🇫🇷" },
  { code: "+34",  flag: "🇪🇸" },
  { code: "+39",  flag: "🇮🇹" },
  { code: "+55",  flag: "🇧🇷" },
  { code: "+52",  flag: "🇲🇽" },
  { code: "+91",  flag: "🇮🇳" },
  { code: "+86",  flag: "🇨🇳" },
  { code: "+81",  flag: "🇯🇵" },
];

const steps = [
  {
    key: "goal",
    question: "What is your main goal?",
    gridCols: 1,
    options: ["Lose weight", "Build muscle", "Healthy lifestyle"],
  },
  {
    key: "gender",
    question: "What is your gender?",
    gridCols: 2,
    options: ["Male", "Female"],
  },
  
  {
    key: "age",
    question: "What is your age range?",
    gridCols: 2,
    options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "54+"],
  },
  {
    key: "whyCoaching",
    type: "text",
    question: "Why are you choosing to make the investment in online coaching?",
    placeholder: "Share your motivation...",
  },
  {
    key: "timezone",
    question: "What is your time zone?",
    gridCols: 2,
    options: ["Pacific", "Mountain", "Central", "Eastern", "Other"],
  },
];

const TOTAL = steps.length + 1; // +1 for contact step

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = {
  wrap: {
    fontFamily: "'DM Sans', sans-serif",
    width: "100%",
    padding: ".5rem 1.5rem",
    boxSizing: "border-box",
    color: "#1a1a1a",
  },
  progressTrack: {
    width: "100%",
    height: "3px",
    background: "#e8e8e8",
    borderRadius: "99px",
    marginBottom: "1rem",
    overflow: "hidden",
  },
  progressFill: (pct) => ({
    height: "100%",
    width: `${pct}%`,
    background: "#111",
    borderRadius: "99px",
    transition: "width 0.35s ease",
  }),
  stepLabel: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#999",
    margin: "0 0 0.4rem",
  },
  question: {
    fontSize: "1.2rem",
    fontWeight: "600",
    lineHeight: 1.25,
    color: "#111",
    margin: "0 0 1rem",
  },
  optionBtn: (selected) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 0.5rem",
    border: selected ? "2px solid #111" : "1.5px solid #e0e0e0",
    borderRadius: "14px",
    background: selected ? "#111" : "#fff",
    color: selected ? "#fff" : "#333",
    fontSize: "14px",
    fontWeight: selected ? "600" : "400",
    cursor: "pointer",
    transition: "all 0.15s ease",
    fontFamily: "inherit",
    width: "100%",
  }),
  textarea: {
    width: "100%",
    minHeight: "130px",
    padding: "1rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "14px",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    resize: "vertical",
    boxSizing: "border-box",
    outline: "none",
    lineHeight: 1.6,
    display: "block",
  },
  nextBtn: (ready, loading) => ({
    width: "100%",
    padding: "0.75rem",
    marginTop: ".75rem",
    background: ready && !loading ? "#112a58" : "#e0e0e0",
    color: ready && !loading ? "#fff" : "#aaa",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: ready && !loading ? "pointer" : "default",
    fontFamily: "inherit",
    transition: "background 0.2s",
  }),
  fieldLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#888",
    marginBottom: "6px",
  },
  fieldWrap: { marginBottom: "1rem" },
  input: {
    width: "100%",
    padding: "0.4rem 1rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    boxSizing: "border-box",
    outline: "none",
    background: "#fff",
    display: "block",
  },
  phoneRow: { display: "flex", gap: "8px" },
  areaSelect: {
    padding: "0.75rem 0.5rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    background: "#fff",
    outline: "none",
    flexShrink: 0,
    width: "110px",
  },
  optionalTag: {
    fontSize: "11px",
    color: "#bbb",
    fontWeight: "400",
    marginLeft: "6px",
    textTransform: "none",
    letterSpacing: 0,
  },
  errorMsg: {
    fontSize: "13px",
    color: "#c0392b",
    marginTop: "0.75rem",
    textAlign: "center",
  },
  successWrap: {
    textAlign: "center",
    padding: "2rem 0",
  },
  successIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  successTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#111",
    margin: "0 0 0.5rem",
  },
  successSubtitle: {
    fontSize: "15px",
    color: "#888",
    margin: 0,
  },
  summaryCard: {
    background: "#f6f6f6",
    borderRadius: "14px",
    padding: "1.25rem",
    margin: "1.5rem 0",
    textAlign: "left",
  },
  summaryRow: (last) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    fontSize: "13px",
    padding: "7px 0",
    borderBottom: last ? "none" : "1px solid #ebebeb",
  }),
  summaryLabel: { color: "#888", flexShrink: 0 },
  summaryValue: { fontWeight: "600", color: "#111", textAlign: "right", wordBreak: "break-word" },
  restartBtn: {
    background: "transparent",
    border: "1.5px solid #e0e0e0",
    borderRadius: "12px",
    padding: "0.75rem 1.5rem",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    color: "#555",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function LeadFormQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    areaCode: "+1",
    phone: "",
    country: "",
    occupation: "",
    instagram: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isChoiceStep = currentStep < steps.length && !steps[currentStep].type;
  const isTextStep   = currentStep < steps.length && steps[currentStep]?.type === "text";
  const isContactStep = currentStep === steps.length;
  const step = steps[currentStep];
  const progress = submitted ? 100 : Math.round((currentStep / TOTAL) * 100);

  const canAdvance = () => {
    if (isChoiceStep) return !!answers[step.key];
    if (isTextStep)   return (answers[step.key] || "").trim().length > 0;
    return false;
  };

  const contactReady = () =>
    contact.firstName.trim() &&
    contact.lastName.trim() &&
    contact.email.trim() &&
    contact.phone.trim() &&
    contact.country.trim() &&
    contact.occupation.trim();

  const upd = (field) => (e) =>
    setContact((prev) => ({ ...prev, [field]: e.target.value }));

  // ── Submit handler — posts to Zapier, no page redirect
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactReady()) return;

    setLoading(true);
    setError(null);

    // Build a clean, flat payload so every field is a top-level key in Zapier
    const payload = {
      // Quiz answers
      gender:       answers.gender       || "",
      goal:         answers.goal         || "",
      age:          answers.age          || "",
      whyCoaching:  answers.whyCoaching  || "",
      timezone:     answers.timezone     || "",
      // Contact info
      firstName:    contact.firstName,
      lastName:     contact.lastName,
      fullName:     `${contact.firstName} ${contact.lastName}`,
      email:        contact.email,
      phone:        `${contact.areaCode} ${contact.phone}`,
      country:      contact.country,
      occupation:   contact.occupation,
      instagram:    contact.instagram || "",
    };

  try {
    setLoading(true);

    await Promise.all([
      // 1️⃣ Send to Zapier
      fetch(TRAINERIZE_WEBHOOK, {
        method: "POST",
        body: JSON.stringify(payload),
      }),

      // 2️⃣ Send to Google Apps Script (email)
      fetch(EMAIL_WEBHOOK, {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    ]);

    setSubmitted(true);
  } catch (err) {
    setError("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setContact({ firstName: "", lastName: "", email: "", areaCode: "+1", phone: "", country: "", occupation: "", instagram: "" });
    setSubmitted(false);
    setError(null);
  };

  // ── Success screen
  if (submitted) {
    // const summaryRows = [
    //   { label: "firstName",         value: `${contact.firstName}` },
    //   {label: "lastName", value: `${contact.lastName}` },
    //   { label: "Email",        value: contact.email },
    //   { label: "Phone",        value: `${contact.areaCode} ${contact.phone}` },
    //   { label: "Country",      value: contact.country },
    //   { label: "Occupation",   value: contact.occupation },
    //   { label: "Gender",       value: answers.gender },
    //   { label: "Goal",         value: answers.goal },
    //   { label: "Age range",    value: answers.age },
    //   { label: "Time zone",    value: answers.timezone },
    //   { label: "Why coaching", value: answers.whyCoaching },
    //   ...(contact.instagram ? [{ label: "Instagram", value: contact.instagram }] : []),
    // ];

    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <div style={s.wrap}>
          <div style={s.progressTrack}><div style={s.progressFill(100)} /></div>
          <div style={s.successWrap}>
            <div style={s.successIcon}>✅</div>
            <p style={s.successTitle}>You're all set!</p>
            <p style={s.successSubtitle}>We've received your info and will be in touch shortly.</p>
          </div>
          {/* <div style={s.summaryCard}>
            {summaryRows.map((row, i) => (
              <div key={i} style={s.summaryRow(i === summaryRows.length - 1)}>
                <span style={s.summaryLabel}>{row.label}</span>
                <span style={s.summaryValue}>{row.value || "—"}</span>
              </div>
            ))}
          </div> */}
          <div style={{ textAlign: "center" }}>
            <button style={s.restartBtn} onClick={handleRestart}>← Start over</button>
          </div>
        </div>
      </>
    );
  }

  // ── Quiz screen
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={s.wrap}>
        <div style={s.progressTrack}><div style={s.progressFill(progress)} /></div>

        <p style={s.stepLabel}>Step {currentStep + 1} of {TOTAL}</p>

        {/* ── Choice + text steps ── */}
        {!isContactStep && (
          <>
            <p style={s.question}>{step.question}</p>

            {isChoiceStep && (
              <div style={{
                display: "grid",
                gridTemplateColumns: step.gridCols === 2 ? "1fr 1fr" : "1fr",
                gap: "10px",
              }}>
                {step.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    style={s.optionBtn(answers[step.key] === opt)}
                    onClick={() => setAnswers((prev) => ({ ...prev, [step.key]: opt }))}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {isTextStep && (
              <textarea
                style={s.textarea}
                placeholder={step.placeholder}
                value={answers[step.key] || ""}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [step.key]: e.target.value }))}
              />
            )}

            <button
              type="button"
              style={s.nextBtn(canAdvance())}
              disabled={!canAdvance()}
              onClick={() => setCurrentStep((p) => p + 1)}
            >
              Continue →
            </button>
          </>
        )}

      {/* ── Contact step ── */}
        {isContactStep && (
          <>
            <p style={s.question}>Almost done — tell us about yourself</p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1rem" }}>
                <div>
                  <label style={s.fieldLabel}>First name</label>
                  <input style={s.input} type="text" placeholder="Jane" value={contact.firstName} onChange={upd("firstName")} required />
                </div>
                <div>
                  <label style={s.fieldLabel}>Last name</label>
                  <input style={s.input} type="text" placeholder="Smith" value={contact.lastName} onChange={upd("lastName")} required />
                </div>
              </div>

              <div style={s.fieldWrap}>
                <label style={s.fieldLabel}>Email</label>
                <input style={s.input} type="email" placeholder="jane@email.com" value={contact.email} onChange={upd("email")} required />
              </div>

              <div style={s.fieldWrap}>
                <label style={s.fieldLabel}>Phone number</label>
                <div style={s.phoneRow}>
                  <select style={s.areaSelect} value={contact.areaCode} onChange={upd("areaCode")}>
                    {areaCodes.map((ac) => (
                      <option key={ac.code} value={ac.code}>{ac.flag} {ac.code}</option>
                    ))}
                  </select>
                  <input style={{ ...s.input, flex: 1 }} type="tel" placeholder="(555) 000-0000" value={contact.phone} onChange={upd("phone")} required />
                </div>
              </div>

              <div style={s.fieldWrap}>
                <label style={s.fieldLabel}>Country</label>
                <input style={s.input} type="text" placeholder="United States" value={contact.country} onChange={upd("country")} required />
              </div>

              <div style={s.fieldWrap}>
                <label style={s.fieldLabel}>Occupation</label>
                <input style={s.input} type="text" placeholder="e.g. Software Engineer" value={contact.occupation} onChange={upd("occupation")} required />
              </div>

              <div style={s.fieldWrap}>
                <label style={s.fieldLabel}>
                  Instagram handle
                  <span style={s.optionalTag}>optional</span>
                </label>
                <input style={s.input} type="text" placeholder="@yourhandle" value={contact.instagram} onChange={upd("instagram")} />
              </div>

              {error && <p style={s.errorMsg}>{error}</p>}

              <button
                type="submit"
                style={s.nextBtn(contactReady(), loading)}
                disabled={!contactReady() || loading}
              >
                {loading ? "Submitting..." : "Submit →"}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
