import { useState, useEffect } from "react";

export default function App() {
  let [pokemonObj, setPokemonObj] = useState([]);
  //const [pokes, setPokes] = useState([]);
  const[filter, setFilter]=useState([]);
  const [name, setName] = useState([]);
  const [inputText, setInputText] = useState("");
  
  useEffect(() => {
    getPokemon();
  }, []);
  const getPokemon = function () {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setPokemonObj(data);
      })
      .catch((error) => console.error(error));
  };
  //console.log(pokemonObj)
  function handleSubmit(e) {
    e.preventDefault();
    //console.log("pokes is "+pokes)
    console.log("this is obj" + JSON.stringify(pokemonObj));
    //setPokes([...pokes, inputText]);
  }
//  const pokemonInfo = pokes.map((poke) => {
   
//      const foundPoke = pokemonObj.find((pokemonObj) => {
//       return pokemonObj.name == poke;
//     });
    

  //   return {
  //     typedName: poke,
  //     pokemon: foundPoke.num,
  //     pokemon: foundPoke.type,
  //     pokemon: foundPoke.weakness,
  //     pokemon: foundPoke.img,
  //   };
  // });

  return (
    <div>
      <h1>Type the name of a poke!</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {pokemonObj.map((poke) => {
        return (
          <ul id="Card">
            <img src={poke.image} alt="poke Image"></img>
            <li>{poke.typedName}</li>
            <li>num {poke.num}</li>
            <li>type {poke.type}</li>
            <li>weakness {poke.weakness}</li>
          </ul>
        );
      })}
    </div>
  );
}
