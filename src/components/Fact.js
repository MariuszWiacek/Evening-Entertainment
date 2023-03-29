import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fact = () => {
  const [fact, setFact] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `https://api.api-ninjas.com/v1/facts?limit=1`;

      const requestURLconfig = {
        headers: {
          "X-Api-Key": "+HjQRWo/G88Py6vuvVWDeA==Soa7hk2iKIwOlJnt",
        },
      };

      try {
        const response = await axios(requestURL, requestURLconfig);
        const fact = response["data"][0].fact;
        setFact(fact);
      } catch (error) {
        console.error("Error fetching fact:", error);
        if (attempts < 5) {
          setAttempts(attempts + 1);
          fetchData();
        } else {
          setFact("Sorry, could not fetch a fact.");
        }
      }
    };

    fetchData();
  }, [attempts]);

  return (
    <div>
      <h2>Fact of the day: </h2>
      <p style={{ paddingTop: "5%" }} >
        {fact}
      </p>
    </div>
  );
};

export default Fact;
