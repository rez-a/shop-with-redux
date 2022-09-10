import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { cartCounter } = useSelector(state => state.cart)
    return (
        <nav className={`navbar navbar-expand bg-white shadow position-fixed top-0 w-100 ${styles.navbar}`}>
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-between align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-primary" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to='/cart'><span>{cartCounter}</span><BsCart3 /></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;