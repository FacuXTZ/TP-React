import React from "react";
import "../app.css";

const ItemListContainer = () => {
    const productos = [
        { id: 1, nombre: "Samsung Galaxy S25 Ultra", precio: "$2.799.000" },
        { id: 2, nombre: "Laptop Asus Vivobook", precio: "$1.523.428" },
        { id: 3, nombre: "Auriculares Hyperx Cloud 3", precio: "$231.999" },
        { id: 3, nombre: "Samsung Galaxy Watch 7", precio: "$255.995" },
    ]

    return (
        <div className="product-container">
            <h3>Productos Destacados</h3>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;