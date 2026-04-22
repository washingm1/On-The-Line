{/* Benefits Section — OPTION A: Overlapping Badge CTA */}
<div className='benefitsContainer'>

    <div className='benefitsText'>
        <div className="landing-subheadings" id='benefitsHeader'>What do you get?</div>

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
        <img
            className='appScreen'
            src={appScreen}
            alt='fitness app screenshot showing calorie and nutrition tracker'
        />
        {/* CTA Badge overlapping the bottom of the image */}
        <a href="#cook-like-im-book" className='imgCTA'>
            🥗 Check out Cook Like I'm Book — nutritious meals to fuel your fitness goals!
        </a>
    </div>

</div>
