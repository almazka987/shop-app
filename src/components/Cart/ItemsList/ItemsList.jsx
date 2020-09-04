import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import cls from './ItemsList.scss';
import {resetCounter, uploadCounters} from "../../../actions/counter";
import {removeItem} from "../../../actions/cart";
import {updateSettingsByUrl} from "../../../actions/general";
import {withRouter} from "react-router-dom";

class ItemsList extends Component {
    componentDidMount() {
        const {location, updateSettings} = this.props;
        updateSettings(location.pathname);
    };

    render() {
        const {counters, onDelete, onPlus, onMinus, onReset} = this.props;
        return (
            <React.Fragment>
                <button className="btn btn-danger m-2" onClick={onReset}>Reset</button>
                <div className={[cls.itemsBox, 'border border-dark'].join(' ')}>
                    { counters.map(obj => {
                    return (
                        <CartItem key={'o' + obj.id} onDelete={() => onDelete(obj.id)} onPlus={() => onPlus('increment', obj)} onMinus={() => onMinus('decrement', obj)} value={obj.val} counter={obj} />
                );
                }) }
                </div>
            </React.Fragment>
        );
    }
}

function initMapStateToProps(state) {
  return {
    counters: state.cartReducer.counters
  };
}

function initMapDispatchToProps(dispatch) {
    return {
        updateSettings : (url) => dispatch(updateSettingsByUrl(url)),
        onReset : () => dispatch(resetCounter()),
        onDelete : (id) => dispatch(removeItem(id)),
        onPlus : (operation, obj) => dispatch(uploadCounters(operation, obj)),
        onMinus : (operation, obj) => dispatch(uploadCounters(operation, obj))
    }
}

export default withRouter(connect(initMapStateToProps, initMapDispatchToProps)(ItemsList));
