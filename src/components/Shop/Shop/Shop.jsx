import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateSettingsByUrl} from "../../../actions/general";
import {withRouter} from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import cls from './Shop.scss';

class Shop extends Component {
    getProductsList() {
        const {items} = this.props;
        if (items.length > 0) {
          return items.map(obj => {
            return (
                <ShopItem />
            );
        });
        } else {
            return (<h2>Продуктов нема</h2>);
        }
    }

    componentDidMount() {
        const {location, updateSettings} = this.props;
        updateSettings(location.pathname);
    };

    render() {
        return (
            <React.Fragment>
                <div className={cls.shopWrapper}>
                    {this.getProductsList()}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.shopReducer.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSettings : (url) => dispatch(updateSettingsByUrl(url))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));
