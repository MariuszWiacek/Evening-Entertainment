import React, { useState, useEffect } from 'react';
import './Fact.css'





const Fact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
          'X-Api-Key': '+HjQRWo/G88Py6vuvVWDeA==Soa7hk2iKIwOlJnt'
        }
      });
      const data = await response.json();
      setFact(data[0].fact);
      
    };
    

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='fact-title' >Fact of the day: </h2>
      <p style={{paddingTop: "5%"}} className='fact-details'>
        {fact}
      </p>
    </div>
  );
};

export default Fact;
