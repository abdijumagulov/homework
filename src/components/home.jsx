import { useState } from 'react';
import "./css/home.css"


const Home = () => {
    const [title, setTitle] = useState('')
    const [namber, setNamber] = useState('')
    const [age, setAge] = useState('')

    const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}
    const namberChangeHandler = (event) => {
		setNamber(event.target.value)
	}
    const ageChangeHandler = (event) => {
		setAge(event.target.value)
	}
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(title);
        console.log(namber);
        console.log(age);
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
						value={title}
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
						value={namber}
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
						value={age}
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