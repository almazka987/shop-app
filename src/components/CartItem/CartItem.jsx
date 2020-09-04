import React, {Component} from 'react';
import  cls from './CartItem.scss';

class CartItem extends Component {
    render() {
        let {counter, value, onPlus, onMinus, onDelete} = this.props;

        return (
            <div className={cls.item}>
                <h2 className="text-primary">{counter.title}</h2>
                <span className="bg-warning m-4 p-2 border border-danger">{value}</span>
                <button type="button" onClick={onPlus} className="btn btn-sm btn-warning m-2">+</button>
                <button type="button" onClick={onMinus} className="btn btn-sm btn-danger m-2">&minus;</button>
                <button type="button" className="btn btn-sm m-2" aria-label="Close" onClick={onDelete}>&times;</button>
            </div>
        );
    }

}

export default CartItem;
