

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DadJoke.css";

 


function DadJoke() {
  const [joke, setJoke] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `https://api.api-ninjas.com/v1/dadjokes?limit=`;

      const requestURLconfig = {
        headers: {
          "X-Api-Key": "R18SX0AP35jxfpCm/bfW1A==eed69WOIbzU6Hyhv",
        },
      };
      const response = await axios(requestURL, requestURLconfig);
      const joke = response["data"][0].joke;
     
      setJoke(joke);
    
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className='joke-title'>Dad's joke fot the evening:</p>
      <p className='joke-details'>{joke}</p>
      
     
      <p></p>
    </div>
  );
}
export default DadJoke