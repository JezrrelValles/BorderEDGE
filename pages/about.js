import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout maincls="main-aboutpage">

                <section className="about-area">
                    <div className="container">
                        <div className="d-flex about-me-wrap align-items-start gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-image-box shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <div className="image-inner">
                                        <img src="/assets/images/me2.png" alt="About Me" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-details" data-aos="zoom-in">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> Self-summary <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="about-details-inner shadow-box">
                                    <img src="/assets/images/icon2.png" alt="Star" />
                                    <h1>David Henderson</h1>
                                    <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-experience shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <h3>EXPERIENCE</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2007 - 2017</p>
                                            <h2>Framer Designer  Developer</h2>
                                            <p className="type">Bluebase Designs</p>
                                        </li>
                                        <li>
                                            <p className="date">2017 - 2023</p>
                                            <h2>Front-End Developer</h2>
                                            <p className="type">Larsen  Toubro</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-education shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <h3>EDUCATION</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2004 - 2007</p>
                                            <h2>Bachelor Degree in Psychology</h2>
                                            <p className="type">University of California</p>
                                        </li>
                                        <li>
                                            <p className="date">2007 - 2009</p>
                                            <h2>Master Degree in Designing</h2>
                                            <p className="type">University of Texas</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="d-flex profile-contact-credentials-wrap gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-profile-box info-box shadow-box h-full">
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="inner-profile-icons shadow-box">
                                                <Link href="#">
                                                    <i className="iconoir-dribbble" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="iconoir-twitter" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>Stay with me</h4>
                                                    <h1>Profiles</h1>
                                                </div>
                                                <Link href="/contact" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-contact-box info-box shadow-box">
                                            <Link className="overlay-link" href="/contact" />
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                            <h1>Let's <br />work <span>together.</span></h1>
                                            <Link href="/contact" className="about-btn">
                                                <img src="/assets/images/icon.svg" alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="h-full">
                                        <div className="about-crenditials-box info-box shadow-box">
                                            <Link className="overlay-link" href="/credentials" />
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <img src="/assets/images/sign.png" alt="Sign" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>more about me</h4>
                                                    <h1>Credentials</h1>
                                                </div>
                                                <Link href="/credentials" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}