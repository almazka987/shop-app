import React from 'react';
import logo from '../../img/logo.png';
import cls from './NavBar.scss'
import {Link} from "react-router-dom";

function NavBar({countersLength}) {
    return <nav className="navbar navbar-light bg-light">
        <div className="container">
            <div className="row fullwidth">
                <div className="col-md-6 navbar-left-column">
                    <Link className={[cls.logo, 'navbar-brand'].join(' ')} to="/"><img src={logo} alt="shop logo" /></Link>
                </div>
                <div className="col-md-6 navbar-right-column">
                    <Link className="navbar-brand" to="/cart"> <i className="fa fa-shopping-cart" /> <span className="badge badge-pill badge-info">{countersLength}</span></Link>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;
