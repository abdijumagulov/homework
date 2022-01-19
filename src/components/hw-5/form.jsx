import { useState } from 'react';
import "./css/home.css";
import "./css/form.css"


const Form = (props) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [feel, setFeel] = useState("");

    const nameChangeHandler = (event) => {
		setName(event.target.value)
	}
    const textChangeHandler = (event) => {
		setText(event.target.value)
	}
    const feelChangeHandler = (event) => {
		setFeel(event.target.value)
	}
    const submitHandler = (event) => {
        event.preventDefault()
        const inputData = {
            name: name,
            text: text,
            feel: feel
        }
        props.onGetForm(inputData)
	}

    return (
        <div className='body'>
            <form className='new-expense__controls' onSubmit={submitHandler}>
            <div>
				<div className='new-expense__control'>
					<label>Общее</label>
					<input
						name='name'
						type='Название'
						placeholder='Название вашего плана'
                        onChange={nameChangeHandler}
					/>
				</div>
			</div>
            <div>
				<div className='new-expense__control'>
					<label>Сегодня буду делать</label>
					<textarea
						name='photo'
						type='text'
						placeholder='your photo'
                        onChange={textChangeHandler}
					/>
				</div>
			</div>
            
            <select className='select' placeholder='' onChange={feelChangeHandler}>
                <option className='option'>Крутое</option>
                <option className='option'>Класное</option>
                <option className='option'>Хорошое</option>
                <option className='option'>Нормальное</option>
                <option className='option'>Не очень</option>
                <option className='option'>Плохое</option>
                <option className='option'>Ужасное</option>
            </select>
            <button className='btnSab' type='submit'>Регистарция</button>
            </form>
        </div>
    );
};

export default Form;