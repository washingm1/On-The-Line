import bannerImage from '../images/workout_video_placeholder.mp4';
import '../css/home.css'
import LeadFormQuiz from '../Components/LeadFormQuiz';
import appScreen from '../images/fitness_dieting_app.png';
import client1Img from '../images/personal_training_client_result_1.jpg'
import client2Img from '../images/personal_training_client_result_2.jpg'
import client3Img from '../images/personal_training_client_result_3.jpg'
import trainer1Image from '../images/personalTrainer1.jpg'
import trainer2Image from '../images/personalTrainer2.jpg'



export default function Home() {
    return (
<>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<div className="introBanner">
    <div className='imgContainer'>

 <video autoPlay muted loop playsInline style={{ width: "100%" }}>
  <source src={bannerImage} type="video/mp4" />
  Your browser does not support the video tag.
</video>
     {/* <img className = "bannerImage" src= {bannerImage} alt="man with personal trainer getting in shape" /> */}
    </div> 

    <div className='bannerText'>
        <div className='bannerQuote'>
        <h1> Progress Over<br></br>Perfection</h1>
        </div>
        <div className = "bannerInfo">
    <p>
   On the Line is where discipline meets determination, helping you push past limits and show up stronger every day. 
            We specialize in personalized training that meets you where you are and challenges you to grow with purpose. 
        
    </p>  
        </div>
    </div> 

<div className='formContainer'>
    {/* <h2>How can I help you?</h2> */}
        <div id="leadForm">
            <LeadFormQuiz />
        </div>
</div>

</div>


{/* Benefits Section */}
 <div className='benefitsContainer'>
<div className='benefitsText'> 
    <div className = "landing-subheadings" id='benefitsHeader'>What do you get?</div>

        <dl className='benefitsList'>
            <dt>Workout plans made for you</dt>
            <dd>Designed for you to get stronger while maintaining your busy life</dd>
             <dt>Your own meal plan</dt>
            <dd>A personalized nutrition guide to sustain a balanced & fit lifestyle</dd>
             <dt>We Track your progress together</dt>
            <dd>Weekly check-ins with me, and progress made easy anywhere, anytime</dd>
             <dt>Continuous Communication</dt>
            <dd>We are in this together! Ask me anything and everything. This is about you!</dd>
        </dl>

</div>

    <div className='appImgWrap'>
    <img className='appScreen'src= {appScreen} alt='fitness app screenshot showing calorie and nutrition tracker'></img>
    </div>
</div>


 <div className='clientTransformations'>
        <h1 className = "landing-subheadings" id='transformationsHeader'>Client Transformations</h1>
        <p>A few of the many positive results that come from personal training with us!</p>
        <div className='clientGallery'>
            <img className = "clientImage" id='client1' src = {client1Img} alt='A man before and after weight loss, with the man on the right showcasing healthy physique' />
            <img className = "clientImage" id='client2' src = {client2Img} alt = 'A woman before and after signing up for personal training program, showing results of a healthier appearance' />
            <img className = "clientImage" id='client3' src = {client3Img} alt = 'A man and a woman before and after results of personal training fitness and dieting program' />
        </div> 
</div> 




<div className="userJourneyContainer">
    <div className = "landing-subheadings" id="userJourneyHeader">How does it Work?</div>
    <div className='journeySteps' id = 'journeyStep1'>
        <div className="journeyStepNum">1</div>
        <div className="journeyStepTitle">Complete The Form</div>
        <div className="journeyStepText">To begin your journey to lasting health results, please complete my contact form and let's get to work!</div>
    </div>
    <div className='journeySteps' id = 'journeyStep2'>
         <div className="journeyStepNum">2</div>
        <div className="journeyStepTitle">We'll Contact You</div>
        <div className="journeyStepText">Within 24 hours, you will receive a message from me</div>
    </div>
    <div className='journeySteps' id = 'journeyStep3'>
         <div className="journeyStepNum">3</div>
        <div className="journeyStepTitle">You're All Set!</div>
        <div className="journeyStepText">That's it! We will have an in-depth conversation to discuss your fitness goals, and how exactly I'll help you acheive them.</div>
    </div>
</div>

<div id="whyChoose">
    <div className = "landing-subheadings" id="whyChooseHeader">Why Choose On the Line Coaching?</div>
    <div id="whyChooseText">
        The #1 reason why fat loss is difficult for most individuals is that extreme measures are taken. Making your diet the centerpiece of your fat loss progression, will be the reason why you'll succeed in permanent results. 
        This program is tailored to your lifestyle and preferences, with evidence-based coaching to make eating enjoyable and keep you fit. Online Coaching is effective for guidance, adherence, and accountability in today's world.
<br></br>
<br></br>
 <div className='importantText'>My name is Calvin Kang</div> and I am a 2-year online coach for sustainable fat loss. I aim to make weight loss achievable while building a healthy relationship with food. 
<br></br><br></br>
You will also work with <div className="importantText"> Addison</div>, a certified Personal Trainer and Nutrition Coach, who specializes in functional movement, injury prevention, and recovery. 
Both coaches are eager to help you reach your goals and manage your busy schedule. Get nutrition and workout plans today with 24/7 communication and weekly check-ins.
    </div>



<div className='trainerGallery'>
    <div className='trainerImageContainer' id='trainer1'>
        <img className='trainerImages' src = {trainer1Image} alt = 'Healthy male personal trainer in fitness attire on a treadmill'></img>
        <p className='caption'>Calvin Kang, an experienced online coach for lasting fitness results.</p>
    </div>


    <div className="trainerImageContainer" id='trainer2'>
        <img className='trainerImages' src = {trainer2Image} alt = 'Healthy male personal trainer in fitness attire on a treadmill'></img>
        <p className='caption'>Addison, a certified personal trainer, and nutritional coach.</p>
    </div>
</div>
{/*       
        <div className="startButton">
             <button
    onClick={() => {
      document.getElementById('introBanner').scrollIntoView({ behavior: 'smooth' });
    } 
}
  >Start your Fitness Journey!</button>
        </div> */}

</div> 




{/* 
{

       <div className='startNowButton'>
  <button
    onClick={() => {
      document.getElementById('leadForm').scrollIntoView({ behavior: 'smooth' });
    } 
}
  >
    Start Now
  </button>
</div>
    } */}






</>
    ); 
    

    
}