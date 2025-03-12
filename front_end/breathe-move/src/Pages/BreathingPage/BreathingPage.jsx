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
                    const res = await getAllBreathingTechniques();
                    setTechniques(
                    res.data.map((techniqueItem) => {
                        return {
                        id: techniqueItem.id,
                        name: techniqueItem.name,
                        description: techniqueItem.description,
                        }
                    })
                );
            } catch (error) {
                console.error("Error fetching breathing techniques:", error)
            }
                }
                fetchTechniques();
            }, []);

    return (
    <>
    <div className={styles.mainContainer} >
    <h1>Breathing Techniques</h1>
    {/* breathingCards state variable is passed as a prop to BreathworkList component */}
    <BreathworkList breathingCards={techniques} />
    </div>
    <Footer />
    </>
    )
}
