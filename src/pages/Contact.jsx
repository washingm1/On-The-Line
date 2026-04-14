import ContactForm from "../Components/ContactForm"

const styles = 
{
    wrap: {
        padding: "2rem",
        textAlign: "center",
        height: "20vh",
        alignItems: "center"
    },

  headerFont: {
    fontSize: "3.5rem"
  },

  bodyFont: {
    fontSize: "1.2rem"
  }
}

export default function Contact() {
    return <>
<div className="wrap" style={styles.wrap}>
  <div className="contactHeader" style={styles.headerFont}>Get in Touch</div>
        <div className="contactText" style={styles.bodyFont}>Have any questions or concerns? Feel free to reach out to us by filling out the form below. </div>
</div>
      
    <ContactForm />
    </>
    
}