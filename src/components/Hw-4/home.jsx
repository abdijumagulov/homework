import { useState } from 'react';
import "./css/home.css"


const Home = () => {
    const [input, setInput] = useState({
		title: "",
		namber: "",
		age: ""
	})

    const titleChangeHandler = (event) => {
		setInput({title: event.target.value})
	}
    const namberChangeHandler = (event) => {
		setInput({namber: event.target.value})
	}
    const ageChangeHandler = (event) => {
		setInput({age: event.target.value})
	}
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(input);
	}

    return (
        <div className='body'>
            <form className='new-expense__controls' onSubmit={submitHandler}>
            <div>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						placeholder='Title'
                        onChange={titleChangeHandler}
					/>
				</div>
			</div>
            <div>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='number'
						placeholder='namber'
                        onChange={namberChangeHandler}
					/>
				</div>
			</div>
            <div>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='number'
						placeholder='age'
                        onChange={ageChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Регистарция</button>
			</div>
        </form>
        </div>
    );
};

export default Home;