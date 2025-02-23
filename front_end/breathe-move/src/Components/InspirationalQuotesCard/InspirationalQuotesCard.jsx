/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from "../../Components/InspirationalQuotesCard/InspirationalQuotesCard.module.css"


const API_ENDPOINT = 'https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes';

function InspirationalQuotesCard({className}) {
    const [quote, setQuote] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(API_ENDPOINT);
            const json = await response.json();
            const quotes = JSON.parse(json.contents);
            //Ensure that a random quote is selected from the quotes array
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            if (quote && randomQuote.q === quote.q) {
                // If the new quote is the same as the current one, select a new one
                randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            }
            setQuote(randomQuote); //updates the quote state variable with a single random quote–
        } catch (error) {
            console.error('Error fetching the quotes:', error);
        }
    }

    return (
        <button onClick={handleClick} className={className}>
            <h2 className={styles.heading}>Need some inspiration?</h2>
            {/* //if quote is not null, display the quote and author */}
            {quote && (
                <p>{quote.q} <p></p> {quote.a}</p>
            )}
        </button>
    );
}

export default InspirationalQuotesCard;