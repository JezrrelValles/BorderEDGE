import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
             <Layout  maincls="main-homepage">
                <section className="service-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up">Servicios</h1>
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-md-4">
                                <div className="service-sidebar" data-aos="fade-right">
                                    <div className="service-sidebar-inner shadow-box">
                                        <ul>
                                            <li>
                                                <i className="iconoir-page-search icon" />
                                                DATA ANALYSIS
                                            </li>
                                            <li>
                                                <i className="iconoir-stats-report icon" />
                                                DATA VISUALIZATION
                                            </li>
                                            <li>
                                                <i className="iconoir-dev-mode-laptop icon" />
                                                SOFTWARE DEVELOPMENT
                                            </li>
                                            <li>
                                                <i className="iconoir-www icon" />
                                                WEB DEVELOPMENT
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up">Servicios</h1>
                                <div className="service-content-wrap" data-aos="zoom-in">
                                    <div className="service-content-inner shadow-box">
                                        <div className="service-items">
                                            <div className="service-item">
                                                <h3>Data Analysis</h3>
                                                <p>Descubre conocimientos valiosos en tus datos con nuestro servicio de análisis avanzado. Identificamos patrones y tendencias clave para tomar decisiones informadas y optimizar tu negocio.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Data visualization</h3>
                                                <p>Transforma datos complejos en visualizaciones claras y atractivas. Nuestro servicio crea gráficos interactivos y tableros dinámicos que facilitan la interpretación y la comunicación efectiva de la información.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>software development</h3>
                                                <p>Obtén soluciones a medida para tus necesidades empresariales. Nuestro equipo de ingenieros crea software robusto, escalable y fácil de mantener, adaptado a tus especificaciones y plazos.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Web development</h3>
                                                <p>Crea una presencia en línea impactante y funcional. Nuestro servicio de desarrollo web ofrece sitios personalizados y responsivos que representan tu marca y satisfacen tus objetivos comerciales.</p>
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
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="iconoir-instagram" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>CONOCE MÁS</h4>
                                                    <h1>Redes</h1>
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
                                            <h1>Colaboremos<br/><span> hoy mismo. </span></h1>
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
                                                    <h4>conoce más</h4>
                                                    <h1>Soluciones</h1>
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