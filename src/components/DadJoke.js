import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DadJoke() {
  const [joke, setJoke] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `https://api.api-ninjas.com/v1/dadjokes?limit=`;

      const requestURLconfig = {
        headers: {
          "X-Api-Key": "R18SX0AP35jxfpCm/bfW1A==eed69WOIbzU6Hyhv",
        },
      };

      try {
        const response = await axios(requestURL, requestURLconfig);
        const joke = response["data"][0].joke;
        setJoke(joke);
      } catch (error) {
        console.error("Error fetching joke:", error);
        if (attempts < 5) {
          setAttempts(attempts + 1);
          fetchData();
        } else {
          setJoke("Refresh to get a joke.");
        }
      }
    };

    fetchData();
  }, [attempts]);

  return (
    <div>
      <h2 className='joke-title'>Dad's joke for the evening:</h2>
      <p style={{paddingTop: "5%"}} className='joke-details'>{joke}</p>
    </div>
  );
}

export default DadJoke;
