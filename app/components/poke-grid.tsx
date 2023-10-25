'use client'
import { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {PokemonCard} from './poke-card';


interface PokeListProps{
  pokemonList: any;
}
export function Pokegrid({pokemonList} : PokeListProps){

  const [search, setSearch] = useState("");

  const filterSearch = (pokemonList: any) => {
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredList = filterSearch(pokemonList);

  return (
<>
<div>
        <h3>Search your pokemon</h3>
        <div>
        <InputGroup>
      <Input
        type="text"
        id="pokemonName"
        placeholder='pikachu'
        onChange={(e) => setSearch(e.target.value)}
      />

      <InputRightElement width='4.5rem'>
      </InputRightElement>
    </InputGroup>
    </div>
</div>
<h3 className="">your poke collection</h3>

{filteredList.map((pokemon: any) => {
  return (
    <div><PokemonCard name={pokemon.name} /></div>
  )
})}

    
  </>
  
  )
}


