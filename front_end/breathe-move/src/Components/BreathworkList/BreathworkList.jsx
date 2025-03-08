import { useEffect, useState } from "react";
import { getAllBreathingTechniques } from "../../../services/apiService";

function BreathworkList() {
    const [techniques, setTechniques] = useState({data: []});

    useEffect(() => {
        async function fetchTechniques() {
            const response = await getAllBreathingTechniques();
            setTechniques(response);
        }
        fetchTechniques();
    }, []);

    return (
        <>
        <h2>Breathing Techniques</h2>
        <ul>
            {techniques.data && techniques.data.map(technique => (
                <li key={technique.id}>
                    <h3>{technique.name}</h3>
                    <p>{technique.description}</p>
                </li>
            ))}
        </ul>
        </>
    )
}



export default BreathworkList;