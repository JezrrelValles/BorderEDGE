import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link href="/" className="logo">
                            <img src="/assets/images/logo.svg" alt="Logo" />
                        </Link>
                        <ul className="footer-menu">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/about">Nosotros</Link></li>
                            <li><Link href="/works">Experiencia</Link></li>
                            <li><Link href="/contact">Contacto</Link></li>
                        </ul>
                        <p className="copyright">
                            © All rights reserved by <span>BorderEdge</span>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
