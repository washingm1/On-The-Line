import aboutTrainerImage from '../images/aboutTrainerImage.jpg'
import '../css/about.css';

export default function About() {
    return (
        <>
            <title>About On The Line - Personal Trainer in Benson, NC | Online Fitness & Nutrition Coaching | On The Line</title>
            <meta
                name="description"
                content="On The Line provides personal training and online coaching in Benson, NC and nearby areas. Build sustainable fat loss, strength, and long-term health with expert guidance."
            />
            <meta
                name="keywords"
                content="personal trainer Benson NC, online fitness coach North Carolina, weight loss coach Benson NC, functional training Benson, nutrition coach NC, sustainable fat loss coaching"
            />

            <div className="aboutBanner">
                <div className="aboutHeader subheadings">
                    About On The Line
                </div>
            </div>

            <div className="aboutWrapper">
                <div className="aboutIntro">
                    <p>
                        On The Line Coaching was built on one belief:
                        fitness should improve your life — not control it.
                    </p>

                    <p>
                        We help busy individuals across Benson, NC and surrounding
                        areas create sustainable results through personalized
                        coaching, smarter nutrition, and training that fits real life.
                    </p>
                </div>

                <div className="aboutContent">

                    <div className="aboutText">

                        <div className="aboutGrid" id="about1">
                            <div className="aboutAccentLine"></div>
                            <h3 className="aboutGridTitle">Local & Personal</h3>
                            <p>
                                Whether you're in Benson, Smithfield, Raleigh,
                                Angier, or the surrounding communities, our
                                team is here to help you transform your health
                                on your own terms. We believe lasting progress
                                comes from habits you can actually maintain,
                                not short-term programs that leave you burned out.
                            </p>
                        </div>

                        <div className="aboutGrid" id="about2">
                            <div className="aboutAccentLine"></div>
                            <h3 className="aboutGridTitle">
                                Sustainable Fat Loss
                            </h3>
                            <p>
                                Our online coaching focuses on helping men and
                                women break free from crash diets and all-or-nothing
                                thinking. With evidence-based nutrition strategies,
                                personalized check-ins, and flexible meal guidance,
                                clients across North Carolina are seeing results
                                that actually last.
                            </p>
                        </div>

                        <div className="aboutGrid" id="about3">
                            <div className="aboutAccentLine"></div>
                            <h3 className="aboutGridTitle">
                                Functional Training
                            </h3>
                            <p>
                                Our certified personal trainer and nutrition coach
                                goes beyond the basics—specializing in functional
                                movement, injury prevention, and recovery.
                                Every session is designed to help you move better,
                                feel stronger, and protect your body for the long term.
                            </p>
                        </div>

                        <div className="aboutGrid" id="about4">
                            <div className="aboutAccentLine"></div>
                            <h3 className="aboutGridTitle">
                                One Program, Two Coaches
                            </h3>
                            <p>
                                Together, we offer something rare:
                                the flexibility of online coaching combined with
                                the depth of in-person functional training.
                                Clients choose us because they want a program
                                built around their lifestyle, not one pulled off a shelf.
                            </p>
                        </div>

                    </div>

                    <div className="aboutImageWrap">
                        <img
                            src={aboutTrainerImage}
                            className="aboutImage"
                            alt="Personal trainer helping client improve strength and fitness"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}