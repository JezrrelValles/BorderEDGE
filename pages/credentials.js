import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
             <Layout  maincls="main-aboutpage">
                <section className="credential-area">
                    <div className="container">
                        <div className="gx-row d-flex">
                            <div className="credential-sidebar-wrap" data-aos="zoom-in">
                                <div className="credential-sidebar text-center">
                                    <div className="shadow-box">
                                        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                        <div className="img-box">
                                            <img src="/assets/images/me.png" alt="About Me" />
                                        </div>
                                        <h2>Border Edge</h2>
                                        <p>Data Science & Software Dev Consulting</p>
                                        <ul className="social-links d-flex justify-content-center">
                                            <li><Link href="#"><i className="iconoir-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="iconoir-instagram" /></Link></li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn">Contacto</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="credential-content flex-1">
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2>Soluciones</h2>
                                    <p>En Border Edge, nos enorgullece ofrecer soluciones integrales y personalizadas para abordar los desafíos únicos que enfrentan las compañías maquiladoras en Ciudad Juárez. Nuestro enfoque se centra en brindar soluciones efectivas y eficientes que impulsen el crecimiento, la optimización y la competitividad de tu negocio.</p>
                                    <p>Nuestro equipo de expertos en ciencia de datos y desarrollo de software está capacitado para identificar y comprender tus necesidades específicas. A través de un análisis exhaustivo y una estrecha colaboración contigo, diseñaremos soluciones a medida que se adapten a tus objetivos y te ayuden a alcanzar el éxito.</p>
                                    <p>Ya sea que estés buscando mejorar la gestión de la cadena de suministro, aumentar la eficiencia operativa, optimizar tus procesos de producción o implementar estrategias de crecimiento, estamos aquí para ayudarte. Nuestras soluciones están respaldadas por tecnología de vanguardia y las mejores prácticas de la industria, lo que garantiza resultados tangibles y duraderos.</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">Data Science</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Producción</h3>
                                        <p>Maximiza la eficiencia y productividad en tus líneas de ensamblaje con nuestro
                                            servicio de análisis de datos. Incrementa el rendimiento de producción, identifica cuellos de
                                            botella y oportunidades de mejora. Además, mejora la calidad analizando defectos y fallas en
                                            productos.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Compras y abastecimiento</h3>
                                        <p>Impulsa tu éxito empresarial con nuestras herramientas de análisis de datos. Evalúa el
                                            desempeño, calidad y plazos de tus proveedores. Optimiza tus compras con tendencias de
                                            precios y costos de materiales. Prevé la demanda y evita problemas de stock mediante un
                                            análisis exhaustivo de inventarios. Descubre oportunidades de ahorro y eficiencia en tu
                                            cadena de suministro.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Logística y cadena de suministro</h3>
                                        <p>Impulsa la eficiencia y ahorra costos con nuestra experiencia en análisis de datos. Optimiza
                                            las rutas y el transporte, reduciendo retrasos y mejorando la planificación. Gestiona tus
                                            inventarios de manera óptima, evitando agotamientos y excesos. Evalúa el rendimiento de tu
                                            cadena de suministro a través del análisis de datos de satisfacción del cliente.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Control de calidad</h3>
                                        <p>Descubre cómo nuestro análisis de datos identifica patrones de defectos y mejora los
                                            procesos. Mediante análisis de datos de pruebas y controles de calidad, optimizamos la
                                            calidad. Además, analizamos reclamaciones y devoluciones para detectar áreas de mejora.
                                            Realizamos un seguimiento y análisis de métricas de calidad para garantizar el cumplimiento
                                            de los estándares. Utilizamos datos de inspecciones para prevenir defectos.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Recursos humanos</h3>
                                        <p>Optimiza tus procesos de contratación y reclutamiento con nuestro análisis de datos.
                                            Identifica áreas de mejora en el proceso de selección y analiza datos de desempeño y
                                            capacitación para potenciar el talento de tu personal. Evalúa el clima laboral con análisis de
                                            ausentismo y rotación de personal. Asegura equidad y competitividad en la remuneración
                                            mediante datos de compensación y beneficios.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Administración y finanzas</h3>
                                        <p>Descubre cómo nuestro análisis de datos financieros impulsa el rendimiento estratégico de tu
                                            empresa. Identifica áreas de ahorro y optimización a través del análisis de costos y
                                            presupuestos. Mejora la gestión de ingresos y flujos de efectivo con datos de facturación y
                                            cuentas por cobrar. Garantiza el cumplimiento normativo mediante análisis de datos fiscales y
                                            regulatorios.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Servicio al cliente</h3>
                                        <p>Optimiza la experiencia del cliente con nuestro análisis de datos de satisfacción. Identifica
                                            áreas de mejora en atención y servicios mediante análisis de reclamaciones y resoluciones.
                                            Mejora la eficiencia en atención al cliente con análisis de tiempo de respuesta y solución de
                                            problemas. Predice la demanda y garantiza el suministro adecuado utilizando datos de ventas
                                            y pedidos.</p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">Software Development</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Producción</h3>
                                        <p>Descubre nuestros servicios de desarrollo de software para la implementación de sistemas de
                                            gestión de producción. Monitorea y controla tus líneas de ensamblaje. Optimiza procesos,
                                            automatiza tareas y mejora la trazabilidad y control de calidad en tu producción.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Compras y abastecimiento</h3>
                                        <p>Presentamos nuestro completo conjunto de servicios de desarrollo de software para la gestión
                                            de proveedores. Maximiza tu eficiencia en la comunicación y evaluación de proveedores.
                                            Agiliza tus procesos de compra y abastecimiento con nuestras plataformas de e-procurement.
                                            Analiza costos y presupuestos de materiales de manera precisa. Gestiona inventarios y
                                            controla tu stock de forma efectiva.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Logística y cadena de suministro</h3>
                                        <p>Presentamos nuestro paquete de servicios de desarrollo de software para la gestión de
                                            almacenes y control de inventarios. Optimiza tu cadena de suministro con nuestras potentes
                                            aplicaciones de planificación de rutas y sistemas de gestión de transporte. Realiza un
                                            seguimiento preciso y eficiente de tus mercancías. Asegura una visibilidad completa y una
                                            trazabilidad impecable en toda tu cadena de suministro.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Control de calidad</h3>
                                        <p>¡Descubre nuestros servicios de desarrollo de software especializados en la gestión de
                                            calidad! Controla y supervisa tus procesos de control de calidad con facilidad utilizando
                                            nuestras soluciones. Recopila y analiza datos de pruebas y controles de calidad con nuestras
                                            aplicaciones de vanguardia. Gestiona no conformidades y acciones correctivas de manera
                                            eficiente. Organiza tus documentos y registros de calidad de forma efectiva.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Recursos humanos</h3>
                                        <p>Experimenta una gestión de recursos humanos eficiente y sin complicaciones con nuestros
                                            servicios de desarrollo de software. Simplifica la administración de personal, optimiza
                                            nóminas y beneficios. Potencia tu reclutamiento y selección con plataformas especializadas.
                                            Evalúa y mejora el desempeño laboral con nuestras aplicaciones. Impulsa el crecimiento
                                            profesional con soluciones avanzadas de capacitación y desarrollo de habilidades.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Administración y finanzas</h3>
                                        <p>Nuestra oferta de desarrollo de software para la gestión financiera y contable simplifica tus
                                            procesos contables y te permite tomar decisiones estratégicas basadas en datos financieros
                                            precisos. Controla costos, presupuestos y flujos de efectivo con nuestras soluciones
                                            especializadas. Agiliza la facturación electrónica y gestiona eficientemente cuentas por
                                            cobrar y por pagar. Obtén informes financieros detallados y análisis en tiempo real.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h3>Servicio al cliente</h3>
                                        <p>Impulsa el crecimiento de tu negocio con nuestros servicios de desarrollo de software
                                            enfocados en la gestión de relaciones con los clientes (CRM). Mejora la atención y
                                            seguimiento de tus clientes con soluciones personalizadas. Ofrece soporte y atención
                                            excepcionales a través de plataformas especializadas con chatbots y sistemas de tickets.
                                            Facilita la comunicación y el acceso a servicios con nuestras aplicaciones móviles.
                                            Comprende y optimiza la satisfacción del cliente mediante potentes herramientas de análisis
                                            de datos.</p>
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