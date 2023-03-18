import React, { useState, useEffect } from 'react';

function Party() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchRandomEvent = async () => {
      const response = await fetch(
        `https://www.skiddle.com/api/v1/events/?api_key=a8b77d8d57a4883af23293c1d6f31725&latitude=51.5074&longitude=0.1278&radius=10&order=random`
      );
      const data = await response.json();
      console.log(data.results)
      const randomEvent = data.results[Math.floor(Math.random() * data.results.length)];
      setEvent(randomEvent);
    };
    fetchRandomEvent();
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Fancy a party tonight? </h2>
      
      <img style={{float:"left", maxHeight: "400px", maxWidth: "400px", width: "50%", paddingRight:"2%"}} src={event.largeimageurl} />
      <h2 style={{color: "orange"}}><strong>{event.eventname}</strong></h2>
      <p><em>{event.description}</em></p>
      <p>{event.date}</p>
      <p>{event.venue.name}</p>
      <p>{event.venue.town}</p>
      <p>{event.venue.postcode}</p>
      
    </div>
  );
}

export default Party;