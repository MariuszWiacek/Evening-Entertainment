import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealDB = () => {
  const [mealData, setMealData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const { meals } = response.data;
      if (meals && meals.length > 0) {
        setMealData(meals[0]);
      } else {
        setError('No meals found');
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  if (!mealData) {
    return <div>Loading...</div>;
  }

  const handleRefreshClick = () => {
    fetchData();
  };

  return (<div><h2>Get some tasty recipe:</h2>
  <h2 style={{ color: 'orange', textAlign: 'center', padding: '0px' }}>
      <strong>{mealData.strMeal}</strong>
    </h2>
    <div className='mealContainer' style={{ display: 'flex', flexDirection: 'row' }}>
      
      <div style={{ width: '40%', padding: '0px' }}>
        
        <div style={{ alignItems: 'center' }}>
          
        </div>
        <div className='imageDiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={mealData.strMealThumb}
            alt={mealData.strMeal}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            style={{
              border: '2px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px #ccc',
              width: '80%',
              height: 'auto',
              transition: 'transform 1s',
              cursor: 'pointer',
            }}
          />
          <button onClick={handleRefreshClick}>Next</button>
        </div>
      </div >
      <div className='descriptionDiv' style={{ width: '60%', padding: '0px' }}>
        <p style={{ fontSize: '18px', textAlign: 'left', maxHeight: '430px', overflowY: 'scroll', overflow: 'auto' }}>
          <em>{mealData.strInstructions}</em>
        </p>
        <p style={{ color: 'orange', fontSize: '18px', textAlign: 'left' }}>
          <em>Cuisine: {mealData.strArea}</em>
        </p>
      </div>
    </div>
    </div>
  );
};

export default MealDB;
