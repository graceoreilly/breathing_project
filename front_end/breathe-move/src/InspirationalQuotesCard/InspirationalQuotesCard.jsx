import React, { useState } from 'react';

const API_ENDPOINT = 'https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes';

function InspirationalQuotesCard() {
    const [data, setData] = useState(null);
    const [quote, setQuote] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(API_ENDPOINT);
            const json = await response.json();
            const quotes = JSON.parse(json.contents);
            setData(quotes); //updating the data state variable with the entire fetched quotes array
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
        <button className="quotes-card-holder" onClick={handleClick}>
            <h2>Click for an inspirational Quote</h2>
            {/* //if quote is not null, display the quote and author */}
            {quote && (
                <p>{quote.q} <p>Author:</p> {quote.a}</p>
            )}
        </button>
    );
}–

export default InspirationalQuotesCard;