import React from 'react';
import logo from '../../img/logo.png';
import cls from './NavBar.scss'
import {Link} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

function NavBar({countersLength}) {
    return (
        <div className="container">
            <nav className={[cls.navBar, 'navbar navbar-light flat-wrapper'].join(' ')}>
                <div className="container">
                    <div className={[cls.topBar, 'row'].join(' ')}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row fullwidth">
                        <div className="col-md-10 navbar-left-column">
                            <Link
                                className={[cls.logo, 'navbar-brand'].join(' ')}
                                to="/">
                                <img src={logo} alt="shop logo"/>
                            </Link>
                            <SearchForm/>
                        </div>
                        <div className="col-md-2 navbar-right-column">
                            <Link className="navbar-brand" to="/cart"> <i className="fa fa-shopping-cart"/>
                                <span
                                    className={[cls.badgeCart, 'badge badge-pill'].join(' ')}>
                                    {countersLength}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar;
