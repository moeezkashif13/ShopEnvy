"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/2`;
const MAX_RETRIES = 25;
const RETRY_DELAY = 8000; // 5 seconds in milliseconds

function MyComponent() {
  const [response, setResponse] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const makeRequest = async () => {
    try {
      const res = await axios.get(API_ENDPOINT);
      setResponse(res.data);
    } catch (error) {
      console.error(`Request failed. Retrying in ${RETRY_DELAY / 1000} seconds...`);
      setTimeout(() => {
        setRetryCount(retryCount + 1);
      }, RETRY_DELAY);
    }
  };

  useEffect(() => {
    if (retryCount < MAX_RETRIES) {
      makeRequest();
    } else {
      console.error(`Max retries reached. Could not get a successful response from ${API_ENDPOINT}`);
    }
  }, [retryCount]);


  
  return (
    <div className='hidden'>
      {response ? (
        <p>Request successful! Response: {JSON.stringify(response)}</p>
      ) : (
        <p>Retrying... Retry count: {retryCount}</p>
      )}
    </div>
  );
}

export default MyComponent;
