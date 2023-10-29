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
  AbsoluteCenter,
} from "@chakra-ui/react";
import Image from "next/image";

export default function UserLogin() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Container maxW="container.lg" color="#262626" centerContent>
          <Box mb="10">
            <Button bg="#fff6a4" color="#292929" size="md">
              <button onClick={() => signOut()}>Sign out</button>
            </Button>
          </Box>
          <UserCard user={session?.user} />
          <Box mt="10">
            <Button bg="#fff6a4" color="#292929" size="md">
              <Link href="/All">See all</Link>
            </Button>
          </Box>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container maxW="container.lg" color="#262626" centerContent>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter px="4">
              <Button bg="#fff6a4" color="#292929" size="md">
                <button onClick={() => signIn()}>Sign in</button>
              </Button>
            </AbsoluteCenter>
            <Divider />
          </Box>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter px="4">
              <Text>or</Text>
            </AbsoluteCenter>
            <Divider />
          </Box>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter px="4">
              <Button bg="#fff6a4" color="#292929" size="md">
                <Link href="/">Home</Link>
              </Button>
            </AbsoluteCenter>
            <Divider />
          </Box>
        </Container>
      </>
    );
  }
}
