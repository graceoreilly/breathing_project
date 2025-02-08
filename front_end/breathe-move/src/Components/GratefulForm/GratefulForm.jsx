/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../GratefulForm/GratefulForm.module.css'

function GratefulForm ({className}) {
const [items, setItems] = useState([]); //state to store the list of what I'm grateful for items

    const handleSubmit = (event) => {
        event.preventDefault();

        //Commented out code, to use when connecting an API
// const formData = new FormData(event.target);
// const inputValue = formData.get('inputName');
// // sendInputValueToApi(inputValue).then(() => /* Do something */ 

const inputValue = event.target.elements.inputName.value;
if(inputValue.trim()) {
    setItems((prevItems) => [...prevItems, inputValue]) //add the new items to the list
}
event.target.reset(); //rests the form input
    };
    return (
    <>
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={className}>
    <p>What are you grateful for today?</p>
    <input type="text" name="inputName" className={styles.input} />
    <button type="Submit" className={styles.submit}>Add</button>
    </form>

    <ul className={styles.output}>
        {items.map((item, index) => (
            <li key={index}>{item}</li> //displays the items in a list
        ))}
    </ul>
    </div>
    </>)
}

export default GratefulForm;