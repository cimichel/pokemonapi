'use client'
import { useState } from 'react';
import { Input, InputGroup,SimpleGrid, Box, InputRightElement, Button, Text } from '@chakra-ui/react';
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
<Text fontSize='2xl'> Search your favorite Pokemon</Text>
        <div>
        <InputGroup>
      <Input
        border="2px solid"
        borderColor='gray.200'
        background='gray.50'
        type="text"
        id="pokemonName"
        placeholder='eg. pikachu'
        onChange={(e) => setSearch(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
      </InputRightElement>
    </InputGroup>
    </div>
</div>
<Box w='100%' p={4} color='#292929'>
<Text as='b'>✨ All pokemons ✨</Text>
</Box>

<SimpleGrid columns={4} spacing={3}>

</SimpleGrid>
{filteredList.map((pokemon: any) => {
  return (

      <PokemonCard name={pokemon.name} />

  )
})}

    
  </>
  
  )
}


