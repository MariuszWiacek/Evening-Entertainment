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

  return (
    <div>
      <h2>Get some tasty recipe :</h2>
      <div class="moviediv" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img
          className="image1"
          style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 0 10px #ccc',
            width: '430px',
            height: '430px',
            marginRight: '2%',
            marginLeft : '2%',
            transition: 'transform 1s',
            cursor: 'pointer',
          }}
          src={mealData.strMealThumb}
          alt={mealData.strMeal}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div class="movieDescription">
          <h2 style={{ color: 'orange', textAlign: 'center', padding: '0px' }}>
            <strong>{mealData.strMeal}</strong>
          </h2>
          <p style={{ fontSize: '18px', textAlign: 'left', maxHeight: '400px', overflowY: 'scroll', overflow: 'auto' }}>
            <em>{mealData.strInstructions}</em>
          </p>
          <p style={{ color: 'orange', fontSize: '18px', textAlign: 'left' }}>
            <em>Cusine : {mealData.strArea}</em>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleRefreshClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDB;
