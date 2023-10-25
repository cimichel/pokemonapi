import Image from 'next/image';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Pokegrid } from './components/poke-grid';
import {PokemonCard} from './components/poke-card';
import {GetAllPokemons} from './lib/api';

export default async function Home() {

  const pokemonList = await GetAllPokemons();
  return (
   
<div>

  

  <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
  <Grid templateColumns='repeat(5, 1fr)' gap={6}>

  <Pokegrid pokemonList={pokemonList}/>


</Grid>
  
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
</div>



  )
}
