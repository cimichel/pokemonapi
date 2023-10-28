"use client";
import Link from "next/link";
import {
  Card,
  Box,
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
  ButtonGroup,
} from "@chakra-ui/react";
import type Pokemon from "@/app/types/pokemon";

interface Props extends Pokemon {}

export function PokemonCard({
  id,
  name,
  url,
  image,
}: Props) {
  return (
    <>
      <Link href={url} key="Card">
        <Card maxW="lg" bg="pink" mb="5">
          <CardBody>
            <Flex>
              <Avatar src={image} />
              <Box ml="4">
                <Text fontSize="sm">#{id}</Text>
                <Text fontWeight="bold">{name}</Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Link>
    </>
  );
}
