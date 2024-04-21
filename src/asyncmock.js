const misProductos = [
    {id: 1, nombre: "Tintillo", precio: 5000, img: "./img/bodega_almaya.jpg"},
    {id: 2, nombre: "Blanco Fenomenal", precio: 3500, img: "./img/bodega_antigal.jpg"},
    {id: 3, nombre: "Tinto muy Rico", precio: 42000, img: "./img/bodega_canva.jpg"},
    {id: 4, nombre: "Espumante embrujado", precio: 6000, img: "./img/bodega_catena.jpg"},
    {id: 5, nombre: "Tintillo", precio: 5000, img: "./img/bodega_almaya.jpg"},
    {id: 6, nombre: "Blanco Fenomenal", precio: 3500, img: "./img/bodega_antigal.jpg"},
    {id: 7, nombre: "Tinto muy Rico", precio: 42000, img: "./img/bodega_canva.jpg"},
    {id: 8, nombre: "Espumante embrujado", precio: 6000, img: "./img/bodega_catena.jpg"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            resolve(misProductos)
        }, 1500)
    })
}