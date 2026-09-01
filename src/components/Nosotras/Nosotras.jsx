import './Nosotras.css'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Nosotras = () => {

    scrollToTop();

    return (

        <section className="nosotras">

            <div className="contenedor-nosotras">

                <div className="nosotras-texto">

                    <span className="subtitulo-nosotras">
                        NUESTRA HISTORIA
                    </span>

                    <h2 className="titulo-nosotras">
                        Dos hermanas, una misma pasión
                    </h2>

                    <p>
                        Somos Marianela y Eliana, hermanas y creadoras de <strong>Wine Meeting & Aromas de Encuentro</strong>. Este proyecto nació de nuestra pasión por compartir momentos alrededor de una copa de vino, un buen mate o una taza de té, porque creemos que los mejores recuerdos siempre comienzan con un encuentro.
                    </p>

                    <p>
                        Nuestro objetivo es acercarte productos cuidadosamente seleccionados y transmitir la historia que hay detrás de cada uno. Nos apasiona descubrir nuevos sabores, conocer sus orígenes y compartir esa experiencia con quienes nos eligen.
                    </p>

                    <p>
                        Trabajamos con una amplia selección de vinos, destilados, licores y accesorios para disfrutar cada brindis. Además, ofrecemos yerbas orgánicas, té en hebras y todos los complementos necesarios para que cada momento tenga un valor especial.
                    </p>

                    <p>
                        También organizamos degustaciones y encuentros con reserva previa, donde buscamos que aprender, descubrir y compartir sean parte de una misma experiencia.
                    </p>

                    <p>
                        Gracias por acompañarnos en este camino. Esperamos que cada producto que llegue a tus manos sea la excusa perfecta para crear un nuevo encuentro.
                    </p>

                    <p className="instagram-nosotras">
                        Seguinos en Instagram
                        <a
                            href="https://www.instagram.com/wine.meeting_/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @wine.meeting
                        </a>
                    </p>

                </div>

                <div className="nosotras-imagen">

                    <img
                        src="/img/nosotras.jpeg"
                        alt="Marianela y Eliana"
                    />

                </div>

            </div>

        </section>

    )

}

export default Nosotras;