'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, 
  InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, 
  ModalOverlay, Stack, Text, useDisclosure, closeOnOverlayClick } from '@chakra-ui/react'


interface UserForm{
  name: string;
  jobTitle: string;
}

interface User{
  name: string;
  jobTitle: string;
}

  export default function Modal() {

  const router = useRouter();
//Hookcall
  const { register, handleSubmit } = useForm<UserForm>();


  const userModal = useDisclosure()
  const jobTitleModal = useDisclosure()


  const handleModal = () => {
    userModal.onClose,
    jobTitleModal.onOpen
  }

  return (


<Button onClick={userModal.onOpen}>Open Modal</Button>


      <Modal closeOnOverlayClick={false} isOpen={userModal.isOpen} onClose={userModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form id='submit-form' onSubmit={handleSubmit(async (data) => { })}>
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

      </Modal> 
      </>

  );
}


