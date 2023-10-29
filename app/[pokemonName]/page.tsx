import Image from "next/legacy/image";
import Link from "next/link";
import { getOnePokemon } from "@/app/graphql/getOnePokemon";
import {
  Container,
  Box,
  Stack,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import ModalImplementation from "@/app/components/modal-implementation";

export default async function PokemonPage({
  params: { pokemonName },
}: {
  params: { pokemonName: string };
}) {
  const pokemon = await getOnePokemon(pokemonName);
  const height = pokemon.height;

  return (
    <>

      <Container maxW="2xl" bg="#FFFFFF" centerContent>
        <Box
          padding="4"
          bg="blue.400"
          color="white"
          maxW="md"
          borderRadius="lg"
          borderWidth="2px"
          borderColor="#F5BD21"
        >
          <Heading size="md">Name: {pokemon.name}</Heading>
          <Heading size="md">Height: {pokemon.height}inches</Heading>
          <Image
              src={pokemon.sprites.front_default}
              width="200"
              height="200"
              alt="pokemon image"
            />
          <Flex>

            <ButtonGroup spacing="2">
              <Button bg="#c52018" color="white">
                <Link href="/All">Back</Link>
              </Button>
              <ModalImplementation />
            </ButtonGroup>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
