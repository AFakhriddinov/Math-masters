import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [quoteData, setQuoteData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const style = {
    textAlign: 'center',
  };
  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=education',
          {
            method: 'GET',
            withCredentials: true,
            headers: {
              'X-Api-Key': 'fi+gQd6ALdiLpzmjNljl2w==PAE0GpskRB6t84mB',
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await response.json();
        setQuoteData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuoteData, setIsLoading]);
  if (hasError) return <div style={style}>Quote could not be found</div>;
  if (isLoading) return <div style={style}>Loading...</div>;
  return (
    <div style={style}>
      {quoteData.map((quote) => (
        <p key={quote.quote}>
          {quote.quote}
          <br />
          <b>{quote.author}</b>
        </p>
      ))}
    </div>
  );
}
