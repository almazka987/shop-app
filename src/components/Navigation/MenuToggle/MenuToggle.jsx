import React from 'react';
import cls from './MenuToggle.scss';

const MenuToggle = props => {
    const {isOpen, onToggle} = props;
    const clsArr = [cls.menuToggle, 'fa', isOpen ? 'fa-times ' + cls.open : 'fa-bars'];
    return (
        <i onClick={onToggle} className={clsArr.join(' ')} />
    )
};

export default MenuToggle;