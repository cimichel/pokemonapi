import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "@/app/components/userCard";
import {
  Container,
  Avatar,
  IconButton,
  CardHeader,
  BsThreeDotsVertical,
  Flex,
  Box,
  VStack,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import { Pokegrid } from "@/app/components/poke-grid";
import { getAllPokemons } from "@/app/graphql/getAllPokemons";

export default async function All() {
  const pokemons = await getAllPokemons();

  return <Pokegrid pokemons={pokemons} />;
}
