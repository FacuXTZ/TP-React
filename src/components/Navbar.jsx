import React from "react";
import CartWidget from "./CartWidget";
import "../App.css";
import logo from "../assets/logo-tienda.webp";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-top">
                <span>📞 Contacto:</span>
                <span>🔥 Oferta:</span>
                <span>👤 <a href="#">Login</a></span>
            </div>
            <nav className="navbar-bottom">
                <img src={logo} alt={"Electroshop Logo"} style={{ height: "150px" }} />
                <div className="nav-links">
                    <a href="#">Celulares</a>
                    <a href="#">Laptops</a>
                    <a href="#">Auriculares</a>
                    <a href="#">Accesorios</a>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;