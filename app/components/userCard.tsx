//Default session can be used to recognize the user and display their name
import {DefaultSession} from 'next-auth';
import { Box, Button, Container } from '@chakra-ui/react'

export function UserCard({user}: {user: DefaultSession["user"]}){
    return(
        <div>

  <Container maxW='550px' bg='purple.600' color='white'>
  <h3>Welcome ✨{user?.name}✨</h3>
  </Container>

    
        </div>
    )
}