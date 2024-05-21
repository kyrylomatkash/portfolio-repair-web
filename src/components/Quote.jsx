import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledQuote = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  color: #333;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  button {
    background-color: #007aff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 122, 255, 0.3),
      0 10px 24px rgba(0, 122, 255, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #005ecf;
      box-shadow: 0 8px 16px rgba(0, 94, 207, 0.4),
        0 12px 28px rgba(0, 94, 207, 0.3);
    }

    &:focus {
      outline: none;
    }
  }
`;

const Quotes = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <StyledQuote>
      <h2>Quote of the Day:</h2>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </StyledQuote>
  );
};

export default Quotes;
