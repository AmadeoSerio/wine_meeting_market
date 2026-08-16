import "./FiltroProductos.css";

const FiltroProductos = ({ orden, setOrden }) => {
    return (
        <div className="filtro-productos">

            <label htmlFor="orden">
                Ordenar por
            </label>

            <select
                id="orden"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
            >
                <option value="default">
                    Destacados
                </option>

                <option value="nombre-az">
                    Nombre (A - Z)
                </option>

                <option value="nombre-za">
                    Nombre (Z - A)
                </option>

                <option value="precio-menor">
                    Precio (menor a mayor)
                </option>

                <option value="precio-mayor">
                    Precio (mayor a menor)
                </option>

            </select>

        </div>
    );
};

export default FiltroProductos;