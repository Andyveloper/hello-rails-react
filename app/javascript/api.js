import React from 'react';
import {useState, useEffect} from 'react'

const Greetings = () => {
  const [text, setText] = useState(null);

  const getQuoteData = async () => {
    const urlRequest = 'greetings';
    const response = await fetch(urlRequest, {
      method: 'GET',
    });
    const data = await response.json();

    return data;
  };

  const setQuoteData = async () => {
    const storedData = await getQuoteData();
    if (!text) {
      setText(storedData.quote);
    }
  };

  useEffect(() => {
    setQuoteData();
  }, []);

  return (
    <div className="quote">
      <h2 className="quote-title">Your Greeting</h2>
      <p className="quote-text">
        {text}
      </p>
    </div>
  );
}

export default Greetings