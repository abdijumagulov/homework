import { useState } from 'react';
import Form from "./form";
import "./css/home.css"

const Home = () => {
    const getFormHandler = (Data) => {
        const Dat = {
			...Data,
			id: Math.random().toString()
		}
        console.log(Dat);
    }

    return (
        <div className='body'>
            <Form onGetForm={getFormHandler}/>
        </div>
    );
};

export default Home;