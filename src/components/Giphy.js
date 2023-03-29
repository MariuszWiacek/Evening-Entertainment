import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Giphy.css";

function Giphy() {
  const [gif, setGif] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "qADA9abLaJMnGncJT3lX9IjzFmm3YVk8";
      const url = "https://api.giphy.com/v1/gifs/";
      const result = await axios(`${url}random?api_key=${apiKey}&tag=funny`);
      setGif(`${result.data.data.images.fixed_height.url}`);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Funny Gif of the day</h2>
      <Card className="card-giphy" style={{ maxHeight: "25rem", maxWidth: "25rem" }}>
        <Card.Img variant="top" src={gif} />
      </Card>
    </div>
  );
}

export default Giphy;
