
import { Box, Stack, Button } from '@chakra-ui/react'


const Header = () => {
    return (
    <div>

<Box bg='#f6bd20' w='100%' p={4} color='#41414a' mb="10">
<Stack spacing={4} direction='row' align='center'>
<Button bg="#fff6a4" color="#292929" size='md'>
    Login
  </Button>
  <Button bg="#fff6a4" color="#292929" size='md'>
    Logout
  </Button>
  <Button bg="#fff6a4" color="#292929" size='md'>
    Button
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
