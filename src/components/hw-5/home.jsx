import { useState } from 'react';
import List from "./List";
import Form from "./form";
import "./css/home.css"
const Data = [

]
const Home = () => {
    const [arr, setArr] = useState(Data)
    const getFormHandler = (Data) => {
        const Dat = {
			...Data,
			id: Math.random().toString()
		}
        setArr((prevState) => {
            return [...prevState,Dat]
        })
    }

    return (
        <div className='body'>
            <Form onGetForm={getFormHandler}/>
            <List arr={arr}/>
        </div>
    );
};

export default Home;