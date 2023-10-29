"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { UserCard } from "@/app/components/userCard";
import {
  Container,
  BiLike,
  Avatar,
  IconButton,
  CardHeader,
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

export default function UserLogin() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Container maxW="container.md" color="red.500">
          <Box bg="tomato" height="80px">
            <Button bg="#fff6a4" color="#292929" size="md">
              <Link href="/UserLogin">Login</Link>
            </Button>
          </Box>
        </Container>

        <Container
          maxW="container.2xl"
          bg="#F6E652"
          color="#262626"
          centerContent
        >
          <Button bg="#fff6a4" color="#292929" size="md">
            <button onClick={() => signOut()}>Sign out</button>
          </Button>
        </Container>
        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <>
        <Container
          maxW="container.2xl"
          bg="#F6E652"
          color="#262626"
          centerContent
        >
          <Button>
            <button onClick={() => signIn()}>Sign in</button>
          </Button>
        </Container>
      </>
    );
  }
}
