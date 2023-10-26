import { Card, Box, Flex, Avatar, Badge, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Divider, Text, ButtonGroup,  } from '@chakra-ui/react'
import Link from 'next/link'
import {getOnePokemon} from '@/app/lib/api'
import Image from "next/image"

interface CardProps{
    name: string,
}

export function PokemonCard({name}: CardProps) {


    return(
        <>
<Link
    href={name}
    key={name + "Card"}
    >
    <Card maxW='sm' bg="pink" mb="5">
  <CardBody>
    <getOnePokemon />
    <Flex>
  <Avatar src='/pokeball.png' />
  <Box ml='4'>
    <Text fontWeight='bold'>
    {name.toUpperCase()}
    </Text>
    <Text fontSize='sm'>Season</Text>
  </Box>
</Flex> 
  </CardBody>
</Card>
</Link>
        </>

    )
    
}