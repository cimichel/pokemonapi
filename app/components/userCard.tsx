//Default session can be used to recognize the user and display their name
import {DefaultSession} from 'next-auth';
import { Box, Button, Container, Heading } from '@chakra-ui/react'

export function UserCard({user}: {user: DefaultSession["user"]}){
    return(
        <div>

<Container maxW="2xl" bg="#FFFFFF" centerContent>
        <Box
          padding="4"
          bg="blue.400"
          color="white"
          maxW="md"
          centerContent
          borderRadius="lg"
          borderWidth="2px"
          borderColor="#F5BD21"
        >
          <Heading size="md">Welcome ✨{user?.name}✨</Heading>
        </Box>
      </Container>

    
        </div>
    )
}