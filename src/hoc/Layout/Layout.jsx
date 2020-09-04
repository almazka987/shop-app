import React, {Component} from 'react';
import NawBar from "../../components/NavBar/NavBar";
import PageHeading from "../../components/UI/PageHeading/PageHeading";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import cls from "./Layout.scss"
import {connect} from "react-redux";

class Layout extends Component {
    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    menuCloseHandler = () => {
        this.setState({
            menu : false
        })
    };

    render() {
        const {pageTitle, counters} = this.props;
        return (
            <div>
                <Drawer
                    onClose={this.menuCloseHandler}
                    isOpen={this.state.menu}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <NawBar countersLength={counters.length} />
                <PageHeading pageTitle={pageTitle} />
                <main className={cls.mainContainer}>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageTitle: state.generalReducer.currentPageTitle,
        counters: state.cartReducer.counters
    }
}

export default connect(mapStateToProps)(Layout);
