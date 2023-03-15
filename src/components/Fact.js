import React, { useState, useEffect } from 'react';




// var limit = 1;
// fetch('https://api.api-ninjas.com/v1/facts?limit=' + limit, {
//   headers: {
//     'X-Api-Key': '+HjQRWo/G88Py6vuvVWDeA==Soa7hk2iKIwOlJnt'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));




// const Fact = () =>{
//   return (
    
//       <p>
//           Fact section
//       </p>
    

    
//   )
// }




const Fact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchFact = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
          'X-Api-Key': '+HjQRWo/G88Py6vuvVWDeA==Soa7hk2iKIwOlJnt'
        }
      });
      const data = await response.json();
      setFact(data[0].fact);
    };
    fetchFact();
  }, []);

  return (
    <p>
      {fact}
    </p>
  );
}







export default Fact