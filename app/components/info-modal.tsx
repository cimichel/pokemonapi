'use client'
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, 
    InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, 
    ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'


// interface UserForm{
//   name: string;
//   jobTitle: string;
// }

// interface User{
//   name: string;
//   jobTitle: string;
// }

export default function Modal() {

//   const router = useRouter();
// //Hookcall
//   const { register, handleSubmit } = useForm<UserForm>();
//   console.log(register('name'))
//   console.log(register('jobTitle'))

//   const userModal = useDisclosure()
//   const jobTitleModal = useDisclosure()
//   const handleModal = () => {
//     userModal.onClose,
//     jobTitleModal.onOpen
//   }

  
  return (
<>
    {/* <Box bg='tomato' w='100%' p={4} color='white'>
    <Stack direction={['column', 'row']} spacing='24px'>

    <Heading size='lg' fontSize='50px' alignContent={'center'}>
  I'm overriding this heading👋 👋 👋 
</Heading>
</Stack>
<Text fontSize='4xl' mt={8} py={6} align={"center"}>VAMO LAkkkkkkkkkkkkkkkAEEEEEEEE</Text>
</Box> 

<Button onClick={userModal.onOpen}>Open Modal</Button>


      <Modal closeOnOverlayClick={false} isOpen={userModal.isOpen} onClose={userModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form id='submit-form' onSubmit={handleSubmit(async (data) => { await axios.post('/api/users', data); router.push('/user') })}>
          <FormControl>
            <FormLabel>
              Create Account 
            </FormLabel>
            <Input type="name" {...register('name')} />
            <FormLabel>
              jobtitle 
            </FormLabel>
            <Input type="position" {...register('jobTitle')}/>
            <FormHelperText>
            I will keep your data secure 
            </FormHelperText>
          </FormControl>
          </form>
          </ModalBody>
          <ModalFooter>
          <Button h='1.75rem' size='sm' type="submit" form="submit-form">
          Save
        </Button>
          </ModalFooter>
          </ModalContent>

      </Modal> */}
      //second modal

    </>
  )
}
