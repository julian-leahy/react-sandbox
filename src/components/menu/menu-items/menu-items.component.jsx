import React from 'react';
import './menu-items.styles.css';

const MenuItems = (props) => {
    const imgPath = require(`../../../images/${props.path}`);
    return (
        <div className='menu-item'
            style={{
                backgroundImage: `url(${imgPath})`
            }}>
            <h1 className='menu-title'>{props.title}</h1>
        </div>
    )
}

export default MenuItems;