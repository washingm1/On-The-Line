import ContactForm from "../Components/ContactForm"
import '../css/contact.css';

export default function Contact() {
    return <>

<title>Start Fitness Journey - Contact Personal Trainer in Benson, NC | Start Coaching </title>
<meta name="description" content="Contact On The Line to start personal training or online coaching in Benson, NC and surrounding areas. Get expert help with fat loss, strength, and nutrition today." />   

<div className="wrap">

  <div className="contactHeader">Start Your Fitness Journey</div>

  <div className="contactText">
    <p>
      Ready to take the next step? Whether you're looking for personal training in Benson, NC or flexible online coaching, we're here to help. 
      Fill out the form below and we'll reach out to learn more about your goals, your schedule, and the best plan for you.
    </p>
  </div>

  {/* Optional trust highlights */}
  <div className="contactHighlights">
    <div>✔ Personalized Plan</div>
    <div>✔ 24hr Response</div>
    <div>✔ No Commitment</div>
  </div>

  <div className="formWrapper">
    <ContactForm />
  </div>

  <div className="contactInfo">
    We respond within 24 hours. No pressure, just a conversation about your goals.
  </div>

</div>

    </>
}