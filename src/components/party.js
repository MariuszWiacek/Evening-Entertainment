import React, { useState, useEffect } from 'react';

function Party() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchRandomEvent = async () => {
      const response = await fetch(
        `https://www.skiddle.com/api/v1/events/?api_key=a8b77d8d57a4883af23293c1d6f31725&latitude=51.5074&longitude=0.1278&radius=10&order=random`
      );
      const data = await response.json();
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
      <h2 style={{color: "red"}}>Fancy a party tonight? </h2>
      <h2>{event.eventname}</h2>
      <p>{event.description}</p>
      <p>Venue : {event.venue.name}</p>
      <p>Date : {event.startdate}</p>
      <p>Price : {event.entryprice}</p>
    </div>
  );
}

export default Party;