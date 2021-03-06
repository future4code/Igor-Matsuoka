import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [pokemon])

    const pegaPokemon = async (pokeName) => {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setPokemon(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}
