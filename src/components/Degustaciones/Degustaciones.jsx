import './Degustaciones.css'

const Degustaciones = () => {

return(

<section className="degustaciones">

    <div className="contenedor-degustaciones">

        <div className="degustaciones-texto">

            <span className="subtitulo-degustaciones">
                EXPERIENCIAS
            </span>

            <h2 className="titulo-degustaciones">
                Degustaciones y Encuentros
            </h2>

            <p>
                En Wine Meeting & Aromas de Encuentro creemos que cada producto tiene una historia para contar y una experiencia para compartir. Por eso organizamos degustaciones y encuentros pensados para descubrir nuevos sabores, aprender y disfrutar en un ambiente relajado.
            </p>

            <p>
                En cada edición exploramos diferentes propuestas, desde vinos de distintas bodegas y varietales hasta yerbas orgánicas y té en hebras cuidadosamente seleccionados. Compartimos sus orígenes, características, formas de elaboración y la mejor manera de apreciarlos.
            </p>

            <p>
                Nuestros encuentros están dirigidos tanto a quienes recién comienzan este recorrido como a quienes ya disfrutan de este mundo y quieren seguir aprendiendo. Buscamos que cada experiencia sea cercana, dinámica y, sobre todo, un momento para compartir.
            </p>

            <p>
                Todos los eventos se realizan con cupos limitados y reserva previa para garantizar una experiencia cómoda y personalizada.
            </p>

        </div>

        <div className="degustaciones-imagen">

            <img
                src="/img/degustacion_principal.jpg"
                alt="Degustación de vinos y yerba mate"
            />

        </div>

    </div>

</section>
);
}


export default Degustaciones