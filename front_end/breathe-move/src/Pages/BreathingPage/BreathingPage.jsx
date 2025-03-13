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
                        const data = await getAllBreathingTechniques();
                        if (Array.isArray(data)) {
                            setTechniques(
                                data.map((techniqueItem) => {
                                    return {
                                        id: techniqueItem.id,
                                        name: techniqueItem.name,
                                        description: techniqueItem.description,
                                    }
                                })
                            );
                        } else {
                            const techniquesArray = data.data || [];
                            if (Array.isArray(techniquesArray)) {
                                setTechniques(
                                    techniquesArray.map((techniqueItem) => {
                                        return {
                                            id: techniqueItem.id,
                                            name: techniqueItem.name,
                                            description: techniqueItem.description,
                                        }
                                    })
                                );
                            } else {
                                console.error("Unexpected data format:", data);
                                setTechniques([]);
                            }
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
    {techniques.length > 0 ? (
                    <BreathworkList breathingCards={techniques} />
                ) : (
                    <p>Loading breathing techniques...</p>
                )}
    </div>
    <Footer />
    </>
    )
}
