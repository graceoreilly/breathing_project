import { useState } from 'React';

function GratefulForm () {
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
    <form onSubmit={handleSubmit}>
    <p>What are you grateful for today?</p>
    <input type="text" name="inputName" />
    <button type="Submit">Add</button>
    </form>

    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li> //displays the items in a list
        ))}
    </ul>
    </>)
}

export default GratefulForm;