import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import cls from './Drawer.scss';
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {
    renderLinks(links) {
        return links.map((linkObj,idx) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={linkObj.to}
                        exact={linkObj.exact}
                        activeClassName={cls.active}
                        onClick={this.props.onClose}
                    >
                        {linkObj.title}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const clsArr = [cls.drawer];
        if (!this.props.isOpen) {
          clsArr.push(cls.close);
        }
        const links = [
            {to: '/', title: 'Shop', exact: true},
            {to: '/cart', title: 'Cart', exact: false},
        ];

        return (
            <React.Fragment>
                <nav className={clsArr.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;
