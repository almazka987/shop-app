import React from 'react';
import cls from './Backdrop.scss';

const Backdrop = props => <div className={cls.backdrop} onClick={props.onClick} />;

export default Backdrop;