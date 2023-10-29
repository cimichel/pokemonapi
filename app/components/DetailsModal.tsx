//WIP
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  closeOnOverlayClick,
} from "@chakra-ui/react";
import { experimental_useFormState as useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { createTodo } from "@/app/actions";

export function DetailsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, jobTitle };
      await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <form onSubmit={submitData}>
                <FormLabel>First name</FormLabel>
                <input
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  value={name}
                />
                <FormLabel>Job Title</FormLabel>
                <input
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Job Title"
                  type="text"
                  value={jobTitle}
                />
                <input type="submit" value="Signup" />
              </form>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              input
              type="submit"
              value="Signup"
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
