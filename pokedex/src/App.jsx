import { useState, useEffect } from "react";
import "./App.css"
export default function App() {
  let [pokemonObj, setPokemonObj] = useState([]);
  let[pokeDisplay,setPokeDisplay]=useState([]);
  const[filter, setFilter]=useState([]);
  const [inputText, setInputText] = useState("");
  const [wselect,setWSelect]=useState("all");
  const [tselect,setTSelect]=useState("all");
  const [filterResult,setFilterResult]=useState(true)

  
  let wChoices = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"]
   let tChoices = ["Bug","Dragon","Electric","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Water"] ;
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
        setPokemonObj(data.pokemon);
        setPokeDisplay(data.pokemon)
      })
      .catch((error) => console.error(error));
  };
  console.log("this is obj" + JSON.stringify(pokemonObj));

function filters(){
  console.log("tselect "+tselect)
  let filter=pokemonObj.filter(x=>{
    let nameFilter=inputText===""||x.name.toLowerCase().includes(inputText.toLowerCase())
    let filterWeakness=wselect==="all"||x.weaknesses.includes(wselect)
    let filterType=tselect==="all"||x.type.includes(tselect)
    return nameFilter && filterWeakness && filterType
  }); 

  return filter;
}

  function handleSubmit(e) {
    e.preventDefault();

    let filterPoke=filters();
    setPokeDisplay(filterPoke)
    if(filterPoke.length<1){
      setFilterResult(false);
    }else{
      setFilterResult(true);
    }
  }
  return (
    <div>
      <div id="header">
      <h1 >Type the name of a pokemon!</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbga5z6LcCzax8QlVYVw5rklR2s-wXu0eH9TFPos-l0Q&s" alt="pokeball"></img>
     
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <label> Weaknesses
        <select
        value={wselect}
        onChange={(e) => {
          setWSelect(e.target.value);
        }}>
          <option key="all">all</option>
         {wChoices.map((choice)=>(
          <option key={choice} >{choice}</option>
         ))} 
        
        </select>
        </label>
        <label> Types
        <select
        value={tselect}
        onChange={(e) => {
          setTSelect(e.target.value);
        }}
          >
          <option key="all" 
          >all</option>
         {tChoices.map((choice)=>(
          <option key={choice} >{choice}</option>
         ))} 
        </select>
        </label>
        <button type="submit">Submit</button>

      </form> </div>
      {!filterResult&&(
        <div>no results found</div>
      )}
      {pokeDisplay.map((poke) => {
        return (
          <ul id="pokedex">
            <img src={poke.img} alt="poke Image"></img>
            <p>{poke.name}</p>
            <p>Number {poke.num}</p>
            <p>Type {poke.type}</p>
            <p>Weakness {poke.weaknesses}</p>
          </ul>
        );
      })}
    </div>
  );
}
