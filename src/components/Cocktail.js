import React, { useState } from "react";
import axios from "axios";
import './Cocktail.css'

const arrayOfCocktails = [
  'Aviation',
  'Bijou',
  'Bramble',
  'Clover Club',
  'Corpse Reviver',
  'Bloody Mary',
  'Hot Toddy',
  'Whiskey Sour',
  'Whiskey Smash',
  'Hurricane'
 ]

const randomCocktail =arrayOfCocktails[Math.floor(Math.random()*arrayOfCocktails.length)];
console.log(randomCocktail)
//const randomCocktail = "Bloody Mary"
const requestURL = `https://api.api-ninjas.com/v1/cocktail?name=${randomCocktail}`;



const requestURLconfig = {
  headers: {
    "X-Api-Key": "cXvJnqSjufVvS4Kugere9Q==K1wuKZ3FwBAdm2os",
  },
};

function Cocktail() {
  // const [cocktail, setCocktail] = useState("");
  // const [instructions, setInstructions] = useState("");
  // const [ingridients, setingridients] = useState("");
  // axios.get(requestURL, requestURLconfig).then(function (response) {
  //   // handle success
  //   // console.log(response["data"][0]);

  //   const name = "bijou";
  //   const instr = "Stir, strain, straight up, cocktail glass, garnish.";
  //   const ingr = ['1 oz Gin', '1 oz Sweet vermouth', '1 oz Herbal liqueur, Green Chartreuse', '1 ds Orange bitters', '1  Maraschino cherry (as garnish)']



  //   // const name = response["data"][0].name;
  //   // const instr = response["data"][0].instructions;
  //   // const ingr = response["data"][0].ingredients;

  //   console.log(name);
  //   console.log(ingr);
  //   console.log(instr);
  //   setCocktail(name)
  //   setInstructions(instr)
  //   setingridients(ingr)
  // });

  
  const cocktail = "bijou";
  const ingridients = "Stir, strain, straight up, cocktail glass, garnish.";
  const instructions = ['1 oz Gin', '1 oz Sweet vermouth', '1 oz Herbal liqueur, Green Chartreuse', '1 ds Orange bitters', '1  Maraschino cherry (as garnish)']


  return (
    <div>
      <p className="cocktail-name">Cocktail: {cocktail}</p>
      <p className="cocktail-ingridients">Ingridients: {ingridients}</p>
      <p className="cocktail-instructions">Instructions: {instructions}</p>
      <p></p>
    </div>
  );
}

export default Cocktail;

