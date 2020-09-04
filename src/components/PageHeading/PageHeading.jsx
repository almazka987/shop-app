import React from 'react';
import cls from './PageHeading.scss';

function PageHeading({pageTitle}) {
    return (
        <div className={cls.pageHeading}>
            <div className={cls.pageHeadingBox}>
                <div className="container">
                    <h1>{pageTitle}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageHeading;
