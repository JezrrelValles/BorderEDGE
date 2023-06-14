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
                            <h1 className="section-heading" data-aos="fade-up">¿Quiénes somos?</h1>
                                <div className="about-details-inner shadow-box">
                                    <h1>Border Edge</h1>
                                    <p>Es una agencia de consultoría emergente que esta profundamente comprometida en facilitar el acceso a todas las personas/empresas a las nuevas tecnologías y la amplia gama de oportunidades que representan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-experience shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <h3>MISIÓN</h3>
                                    <ul>
                                        <li>
                                            <p className="date">Nuestra misión es proporcionar soluciones innovadoras y personalizadas en ciencia de datos y desarrollo de software para ayudar a las organizaciones a aprovechar al máximo sus datos y alcanzar sus objetivos estratégicos.<br/><br/>Nos comprometemos a ofrecer servicios de alta calidad, basados en análisis rigurosos y técnicas avanzadas de procesamiento de datos, que impulsen la toma de decisiones y la optimización de procesos.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-education shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <h3>VISIÓN</h3>
                                    <ul>
                                        <li>
                                            <p className="date">Nos visualizamos como una consultora líder en el campo de la ciencia de datos y el desarrollo de software, reconocida por nuestra excelencia técnica, capacidad para resolver desafíos complejos y enfoque centrado en el cliente.<br/><br/>Buscamos ser un socio estratégico confiable para las organizaciones, ayudándolas a convertir sus datos en información valiosa, automatizar procesos mediante la creación de software a la medida, para alcanzar un rendimiento óptimo en sus operaciones.</p>
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
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-contact-box info-box shadow-box">
                                            <Link className="overlay-link" href="/contact" />
                                            <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                            <h1>Colaboremos<br /><span>hoy mismo.</span></h1>
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