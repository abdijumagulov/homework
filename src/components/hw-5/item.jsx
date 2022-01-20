import React from 'react';
import "./css/item.css"

const Item = (props) => {
    const deleted = (event) => {
        
    }
    return (
        <div className='containerItem'>
            <p className='name'>{props.name}</p>
            <p className='feel'>{props.feel}</p>
            <p className='text'>{props.text}</p>
            <button className="delBtn">Удалить</button>
        </div>
    );
};

export default Item;