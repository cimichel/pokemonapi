'use client'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure, Button, Image, Box
} from '@chakra-ui/react'

export default function ModalImplementation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button bg="#c52018" color="white" onClick={onOpen}>Add to favorites</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
           NotImplementedException
        </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box w='100%' p={4} color='white'>
          <Image 
          src='/travolta.gif'
          alt="picture of Pikachu"
          width='220'
          height='180'
          mb='4'
        />
          </Box>

          </ModalBody>
          <ModalFooter>
            <Button bg="#c52018" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}