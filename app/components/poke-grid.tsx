"use client";
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
} from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { PokemonCard } from "@/app/components/poke-card";
import type Pokemon from "@/app/types/pokemon";

interface Props {
  pokemons: Pokemon[];
}

export function Pokegrid({ pokemons }: Props) {
  const [search, setSearch] = useState("");

  const filterSearch = (pokemons: Pokemons[]) => {
    return pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredPokemons = filterSearch(pokemons);

  return (
    <div>
      <Heading size="lg" fontSize="50px" mb="4">
        Search your favorite Pokemon
      </Heading>
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
      {filteredPokemons.map((pokemon: Pokemon) => {
        return <PokemonCard 
          id={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          image={pokemon.image}
        />;
      })}
    </div>
  );
}
