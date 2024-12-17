
import React from "react";

export const Navbar = () => {

return (
<nav className="navbar">
            <div className="container">
                <div className="logo">TOKO ATK</div>
                <div className="search-bar">
                    <input type="text" placeholder="Cari produk ATK..." />
                    <button type="submit">Cari</button>
                </div>
                <div className="cart">
                    <a href="/cart" className="cart-icon">
                        <span className="cart-count">0</span>
                    </a>
                </div>
            </div>
        </nav>
  );
};