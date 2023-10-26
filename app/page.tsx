import Image from 'next/image';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { SimpleGrid, Container, Text, Heading } from '@chakra-ui/react';
import { Pokegrid } from './components/poke-grid';
import {PokemonCard} from './components/poke-card';
import {GetAllPokemons} from './lib/api';
import { Header } from './components/header';
import { UserLogin } from './users/UserLogin';


export default async function Home() {

  const pokemonList = await GetAllPokemons();

  return (
<>
{/* <UserLogin /> */}



<Container maxW='6xl' bg='#ffffff' centerContent>
  <Box padding='4' bg='#fff6a4' color='black'>
  <Heading size='lg' fontSize='50px'>
  Welcome, seu madruga
</Heading>
<div>
Login Page

</div>
  <br />
    <Pokegrid pokemonList={pokemonList}/>

    <br />
  </Box>
</Container>
</>
  )
}
