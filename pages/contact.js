import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-aboutpage">
                <section className="contact-area">
                    <div className="container">
                        <div className="gx-row d-flex justify-content-between gap-24">
                            <div className="contact-infos">
                                <h3 data-aos="fade-up">Información de contacto</h3>
                                <ul className="contact-details">
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-mail" />
                                        </div>
                                        <div className="right">
                                            <span>CORREO</span>
                                            <h4>info@bluebase.com</h4>
                                            <h4>info@bluebase2.com</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-phone" />
                                        </div>
                                        <div className="right">
                                            <span>TELÉFONO</span>
                                            <h4>+1 504-899-8221</h4>
                                            <h4>+1 504-749-5456</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-pin-alt" />
                                        </div>
                                        <div className="right">
                                            <span>UBICACIÓN</span>
                                            <h4>22 Baker Street, Texas <br />United States <br />W1U 3BW</h4>
                                        </div>
                                    </li>
                                </ul>
                                <h3 data-aos="fade-up">REDES</h3>
                                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                    <li><Link className="shadow-box" href="#"><i className="iconoir-linkedin" /></Link></li>
                                    <li><Link className="shadow-box" href="#"><i className="iconoir-twitter" /></Link></li>
                                    <li><Link className="shadow-box" href="#"><i className="iconoir-instagram" /></Link></li>
                                </ul>
                            </div>
                            <div data-aos="zoom-in" className="contact-form">
                                <div className="shadow-box">
                                    <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                    <img src="/assets/images/icon3.png" alt="Icon" />
                                    <h1>Ponte en contacto<span> hoy.</span></h1>
                                    <form>
                                        <div className="alert alert-success messenger-box-contact__msg" style={{ display: 'none' }} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                        <div className="input-group">
                                            <input type="text" name="full-name" id="full-name" placeholder="Nombre *" />
                                        </div>
                                        <div className="input-group">
                                            <input type="email" name="email" id="email" placeholder="Correo *" />
                                        </div>
                                        <div className="input-group">
                                            <input type="text" name="subject" id="subject" placeholder="Asunto *" />
                                        </div>
                                        <div className="input-group">
                                            <textarea name="message" id="message" placeholder="Mensaje *" />
                                        </div>
                                        <div className="input-group">
                                            <button className="theme-btn submit-btn" name="submit" type="submit">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}