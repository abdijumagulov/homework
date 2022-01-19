import React from 'react';

const Item = () => {
    return (
        <div>
            <div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						placeholder='Title'
					/>
			</div>
        </div>
    );
};

export default Item;