"use client";
import Link from "next/link";
import {
  Card,
  Box,
  SimpleGrid,
  Flex,
  Avatar,
  Container,
  Badge,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Divider,
  Text,
  Grid,
  GridItem,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import type Pokemon from "app/types/pokemon";

interface Props extends Pokemon {}

export function PokemonCard({ id, name, url, image }: Props) {
  const myArray = [id, name, url, image];
  return (
    <>
      <Container bg="#1a54b9" color="#262626" centerContent borderRadius='lg' borderWidth='2px' borderColor="#F5BD21">
        <Link href={url} key="Card">
          <Flex>
            <Avatar size="xl" src={image} />
            <Box ml="1" mt="2">
              <Text fontSize="sm" color="white">Id: {id}</Text>
              <Text fontWeight="bold" color="white">Name: {name}</Text>
              <br />
            </Box>
          </Flex>
        </Link>
      </Container>
    </>
  );
}
