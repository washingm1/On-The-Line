
import aboutTrainerImage from '../images/aboutTrainerImage.jpg'
import '../css/about.css';
export default function About() {
    return (
<>
<title>About On The Line - Personal Trainer in Benson, NC | Online Fitness & Nutrition Coaching | On The Line</title>
<meta name="description" content="On The Line provides personal training and online coaching in Benson, NC and nearby areas. Build sustainable fat loss, strength, and long-term health with expert guidance." />
<meta name="keywords" content="personal trainer Benson NC, online fitness coach North Carolina, weight loss coach Benson NC, functional training Benson, nutrition coach NC, sustainable fat loss coaching" />

<div className="aboutBanner">
        <div className="aboutHeader subheadings">About On The Line</div>
</div>


<div className="aboutWrapper">
    <div className="aboutContent">
<div className="aboutText">
  <div className="aboutGrid" id="about1">
    <div className="aboutGridIcon">📍</div>
    <h3 className="aboutGridTitle">Local & Personal</h3>
    <p>Whether you're in Benson, Smithfield, Dunn, Angier, or the surrounding communities, our team is here to help you transform your health on your own terms. We're a dedicated duo of fitness and nutrition professionals who believe real, lasting results come from building habits you can actually live with — not punishing programs that leave you burned out.</p>
  </div>

  <div className="aboutGrid" id="about2">
    <div className="aboutGridIcon">🥗</div>
    <h3 className="aboutGridTitle">Sustainable Fat Loss</h3>
    <p>Our online coaching specializes in helping men and women break the cycle of crash diets and all-or-nothing thinking. With evidence-based nutrition strategies, personalized check-ins, and flexible meal guidance, clients across North Carolina are finally seeing results that last.</p>
  </div>

  <div className="aboutGrid" id="about3">
    <div className="aboutGridIcon">💪</div>
    <h3 className="aboutGridTitle">Functional Training</h3>
    <p>Our certified personal trainer and nutrition coach goes far beyond the basics — specializing in functional movement, injury prevention, and recovery. Every session helps you move better, feel stronger, and protect your body for the long haul, whether you're recovering from injury or building real-world strength.</p>
  </div>

  <div className="aboutGrid" id="about4">
    <div className="aboutGridIcon">🤝</div>
    <h3 className="aboutGridTitle">One Program, Two Coaches</h3>
    <p>Together we offer the Benson area something rare: the flexibility of online coaching combined with the depth of in-person functional training, all in one place. Clients come to us from Clayton, Four Oaks, Selma, and beyond because they want a program built around them — not pulled off a shelf.</p>
  </div>
</div>

        <img src={aboutTrainerImage} className="aboutImage" alt="" />
    </div>
</div>
        
</>
    )

}