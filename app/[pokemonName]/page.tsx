import Image from "next/image";
import Link from "next/link";
import { getOnePokemon } from "@/app/graphql/getOnePokemon";
import image from "@/app.image";
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
} from "@chakra-ui/react";
import ModalImplementation from "@/app/components/modal-implementation";

export default async function PokemonPage({
  params: { pokemonName },
}: {
  params: { pokemonName: string };
}) {
  const pokemon = await getOnePokemon(pokemonName);

  return (
    <>
      <Container bg="#9c5200" centerContent>
        <Card maxW="sm">
          <CardBody>
            {/* <Image
              src={pokemonObj.sprites.other["official-artwork"].front_default}
              alt={"picture of " + pokemonName}
              width="200"
              height="200"
            /> */}
            <Stack mt="6" spacing="3">
              <Heading size="md">{pokemon.name}</Heading>
              <Text>
                {pokemon.message}
              </Text>
              <Image src={pokemon.sprites.front_default} width="200" height="200" />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button bg="#c52018" color="#fff6a4">
                <Link href="/">Back</Link>
              </Button>
              <ModalImplementation />
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
