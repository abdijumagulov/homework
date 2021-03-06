import React from 'react';
import Item from './item';
const List = (props) => {
    return (
        <div>
            {props.arr.map((element) => {
				return (
					<Item
						name={element.name}
                        text={element.text}
                        feel={element.feel}
                        arr={props.arr}
					/>
				)
			})}
        </div>
    );
};

export default List;