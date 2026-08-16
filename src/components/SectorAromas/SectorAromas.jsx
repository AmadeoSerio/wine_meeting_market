import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductos } from "../../hooks/useProductos";
import FiltroProductos from "../FiltroProductos/FiltroProductos.jsx";
import ItemList from "../ItemList/ItemList";
import BotonUp from "../BotonUp/BotonUp";
import './SectorAromas.css'



const SectorAromas = () => {
    const NAVBAR_HEIGHT = 110;

    const scrollProductos = () => {
        const elemento = document.getElementById("productos");

        if (!elemento) return;

        window.scrollTo({
            top: elemento.offsetTop - NAVBAR_HEIGHT,
            behavior: "smooth",
        });
    };

    const categoriasAromas = [
        "yerbas",
        "te",
        "mates",
        "accesorios_aromas"
    ];

    const productos = useProductos();

    const { idCategoria } = useParams();

    // FILTRO / ORDEN
    const [orden, setOrden] = useState("default");

    const productosAromas = idCategoria
        ? productos.filter(producto => producto.categoria === idCategoria)
        : productos.filter(producto =>
            categoriasAromas.includes(producto.categoria)
        );

    const productosOrdenados = [...productosAromas];

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
                Number(a.precio) - Number(b.precio)
            );
            break;

        case "precio-mayor":
            productosOrdenados.sort((a, b) =>
                Number(b.precio) - Number(a.precio)
            );
            break;

        default:
            break;

    }
    return (
        <>

            {/* =========================================
                HERO AROMAS DE ENCUENTRO
            ========================================= */}

            <div className="hero-sector-aromas">

                <h2 className="titulo-aromas">
                    AROMAS DE ENCUENTRO
                </h2>

                <p className="descripcion-aromas">
                    Yerbas Orgánicas, Té en Hebras y Accesorios.
                </p>

            </div>


            {/* =========================================
                CATEGORÍAS
            ========================================= */}

            <section className="categorias-aromas">

                <div className="div-titulo-aromas">

                    <h2 className="titulo-categorias-aromas">
                        EXPLORÁ NUESTRAS CATEGORÍAS
                    </h2>

                </div>


                <div className="contenedor-categorias-aromas">

                    <div className="sub-contenedor-aromas">


                        {/* YERBAS */}

                        <NavLink
                            to="/SectorAromas/yerbas"
                            className="categoria-link-aromas"
                            onClick={scrollProductos}
                        >

                            <div className="categoria-item-aromas">

                                <img
                                    className="img-categorias-aromas"
                                    src="/img/icono_yerba_aromas.png"
                                    alt="Yerbas"
                                />

                                <p className="texto-categorias-aromas">
                                    Yerbas
                                </p>

                            </div>

                            <span className="flecha-categoria-aromas">
                                →
                            </span>

                        </NavLink>


                        <hr className="linea-categoria-aromas" />


                        {/* TÉ EN HEBRAS */}

                        <NavLink
                            to="/SectorAromas/te"
                            className="categoria-link-aromas"
                            onClick={scrollProductos}
                        >

                            <div className="categoria-item-aromas">

                                <img
                                    className="img-categorias-aromas"
                                    src="/img/icono_te_aromas.png"
                                    alt="Té en Hebras"
                                />

                                <p className="texto-categorias-aromas">
                                    Té en Hebras
                                </p>

                            </div>

                            <span className="flecha-categoria-aromas">
                                →
                            </span>

                        </NavLink>


                        <hr className="linea-categoria-aromas" />


                        {/* MATES */}

                        <NavLink
                            to="/SectorAromas/mates"
                            className="categoria-link-aromas"
                            onClick={scrollProductos}
                        >

                            <div className="categoria-item-aromas">

                                <img
                                    className="img-categorias-aromas"
                                    src="/img/icono_mates_aromas.png"
                                    alt="Mates"
                                />

                                <p className="texto-categorias-aromas">
                                    Mates
                                </p>

                            </div>

                            <span className="flecha-categoria-aromas">
                                →
                            </span>

                        </NavLink>


                        <hr className="linea-categoria-aromas" />


                        {/* ACCESORIOS */}

                        <NavLink
                            to="/SectorAromas/accesorios_aromas"
                            className="categoria-link-aromas"
                            onClick={scrollProductos}
                        >

                            <div className="categoria-item-aromas">

                                <img
                                    className="img-categorias-aromas"
                                    src="/img/icono_accesorios_aromas.png"
                                    alt="Accesorios"
                                />

                                <p className="texto-categorias-aromas">
                                    Accesorios
                                </p>

                            </div>

                            <span className="flecha-categoria-aromas">
                                →
                            </span>

                        </NavLink>


                        <hr className="linea-categoria-aromas" />


                        {/* TODOS */}

                        <NavLink
                            to="/SectorAromas"
                            className="categoria-link-aromas"
                            onClick={scrollProductos}
                        >

                            <div className="categoria-item-aromas">

                                <img
                                    className="img-categorias-aromas"
                                    src="/img/icono_todos_aromas.png"
                                    alt="Todos los productos"
                                />

                                <p className="texto-categorias-aromas">
                                    Todos
                                </p>

                            </div>

                            <span className="flecha-categoria-aromas">
                                →
                            </span>

                        </NavLink>

                    </div>

                </div>

            </section>


            {/* =========================================
                TÍTULO PRODUCTOS
            ========================================= */}

            <div id="productos" className="contenedor-titulo-productos-aromas">

                <h2 className="productos-titulo-aromas">
                    Nuestros productos
                </h2>

            </div>


            {/* =========================================
                PRODUCTOS
            ========================================= */}

            <FiltroProductos orden={orden}
                setOrden={setOrden} />

            <ItemList productos={productosOrdenados} />

            <BotonUp />

        </>
    );
};

export default SectorAromas;