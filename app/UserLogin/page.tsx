'use client'
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import { UserCard } from '@/app/components/userCard';
import { Container,BiLike, Avatar,IconButton, BiChat,BiShare, CardHeader, BsThreeDotsVertical, Flex, Box, VStack, Button, Card, CardBody, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import Image from "next/image"

export default function UserLogin() {

  const { data: session } = useSession();

  if (session){
    return(
      <>
      
      <button onClick={()=> signOut()}>Sign out</button>
      <UserCard user={session?.user}/>
      </>
    )
  }else{
    return(
      <>
  <Container maxW='container.2xl' bg='#F6E652' color='#262626' centerContent>
  <Container maxW='container.2xl' bg='#F6E652' centerContent padding='4'>
  <Box padding='4' bg='#F6E652' color='black' maxW='md'>
  <Image 
        src='/giphy.gif'
        alt="picture of Pikachu"
        width='400'
        height='400'
        mb='4'
        />
  <Heading mb='3'>Welcome to the Pokemon App!</Heading>
  </Box>
  <Button
  size='md'
  height='48px'
  width='200px'
  border='4px'
  borderColor='#9c5200'
  fontSize='18px'
  fontWeight='bold'
  bg='#de9400'
>
<button onClick={()=> signIn()}>Sign in</button>
</Button>
</Container>
  </Container>
      </>
    )
  }
}

