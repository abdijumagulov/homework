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
                
                    <input
						name='name'
						type='Название'
						placeholder='Название вашего плана'
                        onChange={nameChangeHandler}
                        className='nameInput'
					/>
					<textarea
						name='photo'
						type='text'
						placeholder='Что вы будете делать'
                        onChange={textChangeHandler}
                        className='textarea'
					/>
            
            <select className='select'   onChange={feelChangeHandler}>
                <option className='option'>Крутое</option>
                <option className='option'>Класное</option>
                <option className='option'>Хорошое</option>
                <option className='option'>Нормальное</option>
                <option className='option'>Не очень</option>
                <option className='option'>Плохое</option>
                <option className='option'>Ужасное</option>
            </select>
            <button className='btnSab' type='submit'>+</button>
            </form>
        </div>
    );
};

export default Form;