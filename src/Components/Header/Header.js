import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';

function Header(props) {

    const value = useContext(themeContext);

    console.log(value);

    return (
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <nav className={'navbar navbar-expand-lg navbar-light ${value.theme}'}>
                            <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => value.toggle_theme(value.theme)}>
                                <span className="menu_icon"><i className="fas fa-bars" /></span>
                            </button>
                            <div className={'collapse navbar-collapse main-menu-item ${value.theme'} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/About"}>About</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            product
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                            <ul>
                                                <li>
                                                    <NavLink className="dropdown-item" exact to={"/ProductList"}>ProductList</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item" exact to={"/ProductDetail"}>ProductDetail</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                            <NavLink className="dropdown-item" exact to={"/Login"}>login</NavLink>
                                            <NavLink className="dropdown-item" exact to={"/ProductCheckout"}>product checkout</NavLink>
                                            <NavLink className="dropdown-item" exact to={"/ShopingCart"}>shopping cart</NavLink>
                                            <NavLink className="dropdown-item" exact to={"/Confirmation"}>confirmation</NavLink>
                                            <NavLink className="dropdown-item" exact to={"/Elements"}>elements</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            blog
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                            <NavLink className="dropdown-item" exact to={"/Blog"}> Blog</NavLink>
                                            <NavLink className="dropdown-item" exact to={"/SingleBlog"}>Single blog</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="hearer_icon d-flex align-items-center">
                                <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                                <NavLink exact to={"/ShopingCart"}>
                                    <i className="flaticon-shopping-cart-black-shape" />
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </header >
    );
}

export default Header;