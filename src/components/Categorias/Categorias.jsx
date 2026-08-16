import './Categorias.css';
import { NavLink } from 'react-router-dom';

const Categorias = () => {

    const handleClose = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const categorias = [
        {
            nombre: 'Vinos',
            imagen: './img/icono_vinos.png',
            ruta: '/SectorTodos/tintos'
        },
        {
            nombre: 'Destilados y Licores',
            imagen: './img/icono_destilados.png',
            ruta: '/SectorTodos/destilados'
        },
        {
            nombre: 'Yerba Mate',
            imagen: './img/icono_yerbas.png',
            ruta: '/SectorTodos/yerbas'
        },
        {
            nombre: 'Té en Hebras',
            imagen: './img/icono_te.png',
            ruta: '/SectorTodos/te'
        },
        {
            nombre: 'Accesorios',
            imagen: './img/icono_accesorios.png',
            ruta: '/SectorTodos/accesorios'
        },
        {
            nombre: 'Packs y Regalos',
            imagen: './img/icono_regalos.png',
            ruta: '/SectorTodos/packs'
        }
    ];

    return (

        <section className="categorias-hero">

            {/* TÍTULO */}

            <div className="div-titulo-categorias-hero">

                <h2 className="titulo_categorias-hero titulo-desktop-hero">
                    EXPLORÁ NUESTRAS CATEGORÍAS
                </h2>

                <h2 className="titulo_categorias-hero titulo-mobile-hero">
                    CATEGORÍAS
                </h2>

            </div>


            {/* CATEGORÍAS */}

            <div className="contenedor-categorias-hero">

                {categorias.map((categoria, index) => (

                    <div
                        className="categoria-item-hero"
                        key={categoria.nombre}
                    >

                        {categoria.ruta ? (

                            <NavLink
                                to={categoria.ruta}
                                className="categoria-link-hero"
                                onClick={handleClose}
                            >

                                <img
                                    className="img-categorias-hero"
                                    src={categoria.imagen}
                                    alt={categoria.nombre}
                                />

                                <span className="texto_categorias-hero">
                                    {categoria.nombre}
                                </span>

                                <span className="flecha-categoria-hero">
                                    ›
                                </span>

                            </NavLink>

                        ) : (

                            <div className="categoria-link-hero categoria-disabled-hero">

                                <img
                                    className="img-categorias-hero"
                                    src={categoria.imagen}
                                    alt={categoria.nombre}
                                />

                                <span className="texto_categorias-hero">
                                    {categoria.nombre}
                                </span>

                                <span className="flecha-categoria-hero">
                                    ›
                                </span>

                            </div>

                        )}

                        {index < categorias.length - 1 && (
                            <hr className="linea-categoria-hero" />
                        )}

                    </div>

                ))}

            </div>

        </section>

    );
};

export default Categorias;