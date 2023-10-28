import Link from 'next/link';
import { Box, Stack, Button } from '@chakra-ui/react'
import {userCard} from './userCard';
import Image from 'next/image';




const Header = () => {
    return (
    <div>
<Box bg='#f6bd20' w='100%' p={4} color='#41414a' mb="10">

<Stack spacing={4} direction='row' align='center'>
<Stack direction='row'>
  {/* <Image
  width='60'
  height='60'
    boxSize='100px'
    objectFit='cover'
    src='/snorlax.png'
    alt='Dan Abramov'
  /> */}
</Stack>
<Button bg="#fff6a4" color="#292929" size='md'>
<Link href='/UserLogin'>Login</Link>
  </Button>
  <Button bg="#fff6a4" color="#292929" size='md'>
    Logout
  </Button>
  
  <Button bg="#fff6a4" color="#292929" size='md'>
    Button
  </Button>
</Stack>
</Box>
    </div>

  );
}

export default Header;
