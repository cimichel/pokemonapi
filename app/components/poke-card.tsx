import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Divider, Text, ButtonGroup,  } from '@chakra-ui/react'
import Link from 'next/link'

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
    <Card maxW='sm'>
  <CardBody>
    
    {/* <Image
      src=''
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /> */}
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name.toUpperCase()}</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
  </CardFooter>
</Card>
</Link>
        </>

    )
    
}