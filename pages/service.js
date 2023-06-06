import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
             <Layout  maincls="main-homepage">
                <section className="service-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> My Offerings <img src="/assets/images/star-2.png" alt="Star" /></h1>
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-md-4">
                                <div className="service-sidebar" data-aos="fade-right">
                                    <div className="service-sidebar-inner shadow-box">
                                        <ul>
                                            <li>
                                                <i className="iconoir-camera icon" />
                                                PHOTOGRAPHY
                                            </li>
                                            <li>
                                                <i className="iconoir-design-pencil icon" />
                                                WEB DESIGNING
                                            </li>
                                            <li>
                                                <i className="iconoir-color-filter icon" />
                                                BRANDING
                                            </li>
                                            <li>
                                                <i className="iconoir-dev-mode-phone icon" />
                                                DEVELOPMENT
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> My Offerings <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="service-content-wrap" data-aos="zoom-in">
                                    <div className="service-content-inner shadow-box">
                                        <div className="service-items">
                                            <div className="service-item">
                                                <h3>Photography</h3>
                                                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Web Designing</h3>
                                                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Branding</h3>
                                                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Development</h3>
                                                <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                            </div>
                                        </div>
                                    </div>
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