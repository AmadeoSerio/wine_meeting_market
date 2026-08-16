import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductos } from "../../hooks/useProductos";
import FiltroProductos from "../FiltroProductos/FiltroProductos";
import ItemList from "../ItemList/ItemList";
import BotonUp from "../BotonUp/BotonUp";
import './SectorWineMeeting.css'



const SectorWineMeeting = () => {
    const NAVBAR_HEIGHT = 110;

    const scrollProductos = () => {
        const elemento = document.getElementById("productos");

        if (!elemento) return;

        window.scrollTo({
            top: elemento.offsetTop - NAVBAR_HEIGHT,
            behavior: "smooth",
        });
    };

    const categoriasWine = [
        "tintos",
        "blancos",
        "rosados",
        "espumantes",
        "destilados",
        "accesorios_wine"
    ];

    const productos = useProductos();

    const { idCategoria } = useParams();

    const [orden, setOrden] = useState("default");

    const productosWineMeeting = idCategoria
        ? productos.filter(producto => producto.categoria === idCategoria)
        : productos.filter(producto =>
            categoriasWine.includes(producto.categoria)
        );

    const productosOrdenados = [...productosWineMeeting];

    switch (orden) {
        case "nombre-az":
            productosOrdenados.sort((a, b) =>
                a.nombre.localeCompare(b.nombre)
            );
            break;

        case "nombre-za":
            productosOrdenados.sort((a, b) =>
                b.nombre.localeCompare(a.nombre)
            );
            break;

        case "precio-menor":
            productosOrdenados.sort((a, b) =>
                a.precio - b.precio
            );
            break;

        case "precio-mayor":
            productosOrdenados.sort((a, b) =>
                b.precio - a.precio
            );
            break;

        default:
            break;
    }

    return (
        <>
            <div className="hero-sector-wine">
                <h2 className="titulo-wine">WINE MEETING</h2>
                <p className="descripcion-hero">Vinos, Destilados y Accesorios para brindar grandes encuentros.</p>
            </div>


            <section className="categorias-wine">

                <div className="div-titulo">
                    <h2 className="titulo_categorias titulo_categorias_sectorWine">
                        EXPLORÁ NUESTRAS CATEGORÍAS
                    </h2>
                </div>

                <div className="contenedor-categorias-wine">

                    <div className="sub-contenedor">

                        {/* VINOS */}
                        <NavLink
                            to="/SectorWineMeeting/tintos"
                            className="categoria-link"
                            onClick={scrollProductos}
                        >
                            <div className="categoria-item">
                                <img
                                    className="img-categorias img-categorias-sector"
                                    src="/img/icono_vinos.png"
                                    alt="Vinos"
                                />

                                <p className="texto_categorias_wine">
                                    Vinos
                                </p>
                            </div>

                            <span className="flecha-categoria">→</span>
                        </NavLink>


                        <hr className="hr-vertical" />


                        {/* DESTILADOS */}
                        <NavLink
                            to="/SectorWineMeeting/destilados"
                            className="categoria-link"
                            onClick={scrollProductos}
                        >
                            <div className="categoria-item">
                                <img
                                    className="img-categorias img-categorias-sector"
                                    src="/img/icono_destilados.png"
                                    alt="Destilados y Licores"
                                />

                                <p className="texto_categorias_wine">
                                    Destilados y Licores
                                </p>
                            </div>

                            <span className="flecha-categoria">→</span>
                        </NavLink>


                        <hr className="hr-vertical" />


                        {/* ESPUMANTES */}
                        <NavLink
                            to="/SectorWineMeeting/espumantes"
                            className="categoria-link"
                            onClick={scrollProductos}
                        >
                            <div className="categoria-item">
                                <img
                                    className="img-categorias img-categorias-sector"
                                    src="/img/icono_espumante_wineMeeting.png"
                                    alt="Espumantes"
                                />

                                <p className="texto_categorias_wine">
                                    Espumantes
                                </p>
                            </div>

                            <span className="flecha-categoria">→</span>
                        </NavLink>


                        <hr className="hr-vertical" />


                        {/* ACCESORIOS */}
                        <NavLink
                            to="/SectorWineMeeting/accesorios_wine"
                            className="categoria-link"
                            onClick={scrollProductos}
                        >
                            <div className="categoria-item">
                                <img
                                    className="img-categorias img-categorias-sector"
                                    src="/img/icono_sacacorcho.png"
                                    alt="Accesorios"
                                />

                                <p className="texto_categorias_wine">
                                    Accesorios
                                </p>
                            </div>

                            <span className="flecha-categoria">→</span>
                        </NavLink>


                        <hr className="hr-vertical" />


                        {/* TODOS */}
                        <NavLink
                            to="/SectorWineMeeting"
                            className="categoria-link"
                            onClick={scrollProductos}
                        >
                            <div className="categoria-item">
                                <img
                                    className="img-categorias img-categorias-sector"
                                    src="/img/icono_todos_wine.png"
                                    alt="Todos los productos"
                                />

                                <p className="texto_categorias_wine">
                                    Todos
                                </p>
                            </div>

                            <span className="flecha-categoria">→</span>
                        </NavLink>

                    </div>

                </div>

            </section>

            <div id="productos" className="contenedor-titulo-productos">
                <h2 className="productos-titulo">Nuestros productos</h2>
            </div>

            <FiltroProductos
                orden={orden}
                setOrden={setOrden}
            />

            <ItemList productos={productosOrdenados} />
            <BotonUp />
        </>
    )
}

export default SectorWineMeeting