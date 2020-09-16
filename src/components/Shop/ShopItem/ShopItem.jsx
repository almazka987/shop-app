import React, {Component} from "react";
import cls from './ShopItem.scss';
import {Link} from "react-router-dom";

class ShopItem extends Component {
    render() {
        const {productData} = this.props;
        return (
            <Link className={cls.linkItem} to="#">
            <div className={cls.itemBlock}>
                <div className={cls.itemProduct}>
                    <div className={cls.itemImg}><img src={productData.thumbnailUrl} alt=""/></div>
                    <div className={cls.itemActions}>actions</div>
                </div>
                <div className={cls.itemCaption}>
                    <div className={cls.postedIn}></div>
                    <h3 className={cls.productTitle}>{productData.title}</h3>
                    <span className={cls.productPrice}>{productData.price}</span>
                    <div className={cls.shopAction}>action btn</div>
                </div>
            </div>
        </Link>
        )
    }
}

export default ShopItem;
