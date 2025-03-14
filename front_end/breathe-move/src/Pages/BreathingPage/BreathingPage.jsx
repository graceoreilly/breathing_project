import Footer from "../../Components/Footer/Footer";
import styles from "./BreathingPage.module.css"
import { useState, useEffect } from "react";
import BreathworkList from "../../Components/BreathworkList/BreathworkList";
import { getAllBreathingTechniques } from "../../../services/apiService";


export default function BreathingPage() {
    const [techniques, setTechniques] = useState([]);

    useEffect(() => {
        async function fetchTechniques() {
            try {
                const response = await getAllBreathingTechniques();
                const techniquesArray = response.data || [];
                
                if (Array.isArray(techniquesArray)) {
                    setTechniques(
                        techniquesArray.map(techniqueItem => ({
                            id: techniqueItem.id,
                            name: techniqueItem.name,
                            description: techniqueItem.description,
                        }))
                    );
                } else {
                    console.error("Unexpected data format:", response);
                    setTechniques([]);
                }
            } catch (error) {
                console.error("Error fetching breathing techniques:", error);
                setTechniques([]);
            }
        }
        
        fetchTechniques();
    }, []);

    return (
    <>
    <div className={styles.mainContainer} >
    <h1>Breathing Techniques</h1>
    {/* breathingCards state variable is passed as a prop to BreathworkList component */}
        {/* checks if the techniques array has any items in it, if true renders or else renders loading */}
    {techniques.length > 0 ? (
                    <BreathworkList breathingCards={techniques} />
                ) : (
                    <p className={styles.loadingMessage}>Loading breathing techniques...</p>
                )}
    </div>
    <Footer />
    </>
    )
}
