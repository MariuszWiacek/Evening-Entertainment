import React, { useState, useEffect } from 'react';

function Party() {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomEvent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.skiddle.com/api/v1/events/?api_key=a8b77d8d57a4883af23293c1d6f31725&latitude=51.5074&longitude=0.1278&radius=10&order=random`
      );
      const data = await response.json();
      const randomEvent = data.results[Math.floor(Math.random() * data.results.length)];
      setEvent(randomEvent);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomEvent();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>No events found.</div>;
  }

  return (
    <div>
      <h2>Fancy a party in London ? </h2>
      <div><h2 style={{ color: 'orange' }}><strong>{event.eventname}</strong></h2></div>
      <img class="image1"
        style={{
          border: '2px solid #ccc', 
          borderRadius: '10px', 
          boxShadow: '0 0 10px #ccc', 
          float: 'left',
          width: '350px',
          height: '400px',
          marginRight: '2%',
          marginLeft: '2%',
          transition: 'transform 1s',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; /* add transform on hover */
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; /* reset transform on mouse out */
        }}

        src={event.largeimageurl} alt={event.eventname} />


      
      <p>{event.date}</p>
      <p><em>{event.description}</em></p>
      <p>{event.venue.name}, {event.venue.town}, {event.venue.postcode}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={fetchRandomEvent}>Next</button>
      </div>
    </div>
  );
}

export default Party;
