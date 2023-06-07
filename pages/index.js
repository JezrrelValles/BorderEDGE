import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
           <Layout  maincls="main-homepage">

                <section className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-me-box shadow-box">
                                    <Link className="overlay-link" href="/about" />
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <div className="img-box">
                                        <img src="/assets/images/me.png" alt="About Me" />
                                    </div>
                                    <div className="infos">
                                        <h4>The</h4>
                                        <h1>Border Edge</h1>
                                        <p>Análisis de Datos y Software</p>
                                        <Link href="#" className="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-credentials-wrap">
                                    <div data-aos="zoom-in">
                                        <div className="banner shadow-box">
                                            <div className="marquee">
                                                <div>
                                                    <span>BIENVENIDOS A <b>Border Edge</b> <img src="/assets/images/star1.svg" alt="Star" /> BIENVENIDOS A <b>Border Edge</b> <img src="/assets/images/star1.svg" alt="Star" /> BIENVENIDOS A <b>Border Edge</b> <img src="/assets/images/star1.svg" alt="Star" /> BIENVENIDOS A <b>Border Edge</b> <img src="/assets/images/star1.svg" alt="Star" /> BIENVENIDOS A <b>Border Edge</b> <img src="/assets/images/star1.svg" alt="Star" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gx-row d-flex gap-24">
                                        <div data-aos="zoom-in">
                                            <div className="about-crenditials-box info-box shadow-box h-full">
                                                <Link className="overlay-link" href="/credentials" />
                                                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                                <img src="/assets/images/sign.png" alt="Sign" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>conoce más</h4>
                                                        <h1>Border Edge</h1>
                                                    </div>
                                                    <Link href="/credentials" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="zoom-in">
                                            <div className="about-project-box info-box shadow-box h-full">
                                                <Link className="overlay-link" href="/works" />
                                                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                                <img src="/assets/images/my-works.png" alt="My Works" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>conoce más</h4>
                                                        <h1>Clientes</h1>
                                                    </div>
                                                    <Link href="#" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="blog-service-profile-wrap d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-blog-box info-box shadow-box h-full">
                                            <Link href="/blog" className="overlay-link" />
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <img src="/assets/images/gfonts.png" alt="GFonts" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>conoce más</h4>
                                                    <h1>Noticias</h1>
                                                </div>
                                                <Link href="/blog" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-services-box info-box shadow-box h-full">
                                            <Link href="/service" className="overlay-link" />
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="icon-boxes">
                                                <i className="iconoir-page-search" />
                                                <i className="iconoir-dev-mode-laptop" />
                                                <i className="iconoir-graph-up" />
                                                <i className="iconoir-database-stats" />
                                                <i className="iconoir-presentation" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>conoce más</h4>
                                                    <h1>Servicios</h1>
                                                </div>
                                                <Link href="/service" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in">
                                        <div className="about-profile-box info-box shadow-box h-full">
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="inner-profile-icons shadow-box">
                                                <Link href="#">
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="iconoir-instagram" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>conoce más</h4>
                                                    <h1>Redes</h1>
                                                </div>
                                                <Link href="/contact" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-client-box info-box shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                        <div className="client-item">
                                            <h1>+5</h1>
                                            <p>Años <br />Experiencia</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>+20</h1>
                                            <p>clientes <br />satisfechos</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>+30</h1>
                                            <p>Proyectos <br />Completados</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-contact-box info-box shadow-box">
                                    <Link className="overlay-link" href="/contact" />
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                    <h1>Colaboremos<br /><span>desde hoy.</span></h1>
                                    <Link href="#" className="about-btn">
                                        <img src="/assets/images/icon.svg" alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}