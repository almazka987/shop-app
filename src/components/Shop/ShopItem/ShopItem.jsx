import React, {Component} from "react";
import cls from './ShopItem.scss';

class ShopItem extends Component {
    render() {
        return (
            <div className={cls.itemBlock}>
                <div className={cls.itemProduct}>
                    <div className={cls.itemImg}></div>
                    <div className={cls.itemActions}></div>
                </div>
                <div className={cls.itemCaption}>
                    <div className={cls.postedIn}></div>
                    <h3 className={cls.productTitle}></h3>
                    <span className={cls.productPrice}></span>
                    <div className={cls.shopAction}></div>
                </div>
            </div>
        )
    }
}

export default ShopItem;
