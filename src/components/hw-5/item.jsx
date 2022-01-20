import React from 'react';
import "./css/item.css"

const Item = (props) => {
    return (
        <div className='containerItem'>
            <p className='name'>{props.name}</p>
            <p className='text'>{props.text}</p>
            <p className='feel'>{props.feel}</p>
        </div>
    );
};

export default Item;