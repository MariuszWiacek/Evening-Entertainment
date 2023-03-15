import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cocktail.css";

const arrayOfCocktails = [
  "Aviation",
  "Bijou",
  "Bramble",
  "Clover Club",
  "Corpse Reviver",
  "Bloody Mary",
  "Hot Toddy",
  "Whiskey Sour",
  "Whiskey Smash",
  "Hurricane",
  "Margarita"
];

const randomCocktail =
  arrayOfCocktails[Math.floor(Math.random() * arrayOfCocktails.length)];
// console.log(randomCocktail);
//const randomCocktail = "Bloody Mary"

function Cocktail() {
  const [cocktail, setCocktail] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingridients, setingridients] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `https://api.api-ninjas.com/v1/cocktail?name=${randomCocktail}`;

      const requestURLconfig = {
        headers: {
          "X-Api-Key": "cXvJnqSjufVvS4Kugere9Q==K1wuKZ3FwBAdm2os",
        },
      };
      const response = await axios(requestURL, requestURLconfig);
      const name = response["data"][0].name;
      const instr = response["data"][0].instructions;
      const ingr = response["data"][0].ingredients;
      setCocktail(name);
      setInstructions(instr);
      setingridients(ingr);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="cocktail-name">Cocktail: {cocktail}</p>
      <p className="cocktail-ingridients">Ingridients: {ingridients}</p>
      <p className="cocktail-instructions">Instructions: {instructions}</p>
    </div>
  );
}

export default Cocktail;
