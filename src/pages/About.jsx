
import aboutTrainerImage from '../images/aboutTrainerImage.jpg'
import '../css/about.css';
export default function About() {
    return (
<>
<div className="aboutWrapper">
    <div className="aboutHeader subheadings">About On The Line</div>

    <div className="aboutContent">
        <div className="aboutText">
            <p>Whether you're in Benson, Smithfield, Dunn, Angier, or the surrounding communities, our team is here to help you transform your health on your own terms. 
                We're a dedicated duo of fitness and nutrition professionals who believe that real, lasting results come from building habits you can actually live with, not punishing programs that leave you burned out. 
                When you work with us, you're not just hiring a coach. You're gaining a support system designed around your life, your goals, and your body.
                <br></br><br></br>
                Our online coaching program specializes in sustainable fat loss, helping men and women break the cycle of crash diets and all-or-nothing thinking. 
                With two years of focused experience guiding clients through evidence-based nutrition strategies, our online coach understands that the biggest barrier to weight loss isn't willpower. 
                It's the relationship you have with food. Through personalized check-ins, flexible meal guidance, and accountability that fits your schedule, clients across North Carolina are finally seeing results that last.
                       <br></br><br></br>
                For those who want hands-on support, our certified personal trainer and nutrition coach brings a comprehensive approach to fitness that goes far beyond the basics. 
                Specializing in functional movement, injury prevention, and recovery, every session is designed to help you move better, feel stronger, and protect your body for the long haul. 
                Whether you're recovering from an injury, managing chronic pain, or simply want to build a foundation of real-world strength, this approach treats fitness as something you do for your body, not to it. 
                       <br></br><br></br>
                Together, we offer the Benson area a combination you won't find everywhere: the flexibility of online coaching and the depth of in-person functional training, all in one place.
                Our clients come to us from Clayton, Four Oaks, Selma, and beyond because they want a program built around them, not a one-size-fits-all plan pulled off a shelf. 
                If you're searching for a personal trainer near Benson, NC or an online weight loss coach who takes a realistic approach to results, you're in the right place. 
                Reach out today and let's talk about what that looks like for you.</p>
        </div>

        <img src={aboutTrainerImage} className="aboutImage" alt="" />
    </div>
</div>
        
</>
    )

}