"use client";
import { useSession, getSession } from "next-auth/react"
import { useState } from "react";
import {
  Input,
  InputGroup,
  SimpleGrid,
  Box,
  InputRightElement,
  Button,
  Text,
  Container,
  Heading,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { PokemonCard } from "@/app/components/poke-card";
import type Pokemon from "@/app/types/pokemon";

//TODO: filteredPokemons is loading every time there's a change of state - search best practices to fix it
interface Props {
  pokemons: Pokemon[];
}

export function Pokegrid({ pokemons }: Props) {
  const { data: session, status } = useSession()
  const [search, setSearch] = useState("");

  const filterSearch = (pokemons: Pokemons[]) => {
    return pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredPokemons = filterSearch(pokemons);
  if (status === "unauthenticated") {
    return <p>Access Denied 😭</p>
  }
  return (
    <div>
      <VStack>
        <Container
          maxW="container.xl"
          color="#262626"
          centerContent
        >
          <Box w="100%" p={4} color="white">
            <Heading size="2lg" fontSize="50px" mb="4" color="#E3350D">
              Search your favorite Pokemon
            </Heading>
          </Box>
          <InputGroup>
            <Input
              width="100%"
              border="2px solid"
              borderColor="#f6bd20"
              background="gray.100"
              type="text"
              id="pokemonName"
              placeholder="eg. pikachu"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Container>
      </VStack>

      <SimpleGrid columns={4} spacing={6} m="10">
        {filteredPokemons.map((pokemon: Pokemon) => {
          return (
            <Box height="80px" key={pokemon.id}>
              <PokemonCard
              key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                url={pokemon.url}
                image={pokemon.image}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
