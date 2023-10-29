import Image from "next/legacy/image";
import Link from "next/link";
import "@fontsource/gaegu/400.css";
import "@fontsource/preahvihear";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import {
  SimpleGrid,
  Container,
  Text,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import theme from "./theme";
import { DetailsModal } from "@/app/components/DetailsModal";
import { UserLogin } from "@/app/components/UserLogin";

export default async function Home() {
  return (
    <>
      <VStack>
        <Container maxW="container.xl" color="#de3131">
          <SimpleGrid columns={2} spacing={10}>
            <Box position={"relative"} height="150px" width="350px">
              <Image src="/welcome.png" alt="sdfsd" layout='fill' />
            </Box>
            <Box height="80px">
              <Heading>
                Login to embark on your Pokemon-hunting adventure! 🚀
              </Heading>
            </Box>
          </SimpleGrid>
          <Container maxW="container.md">
            <SimpleGrid columns={2} spacing={10}>
              <Box position={"relative"} height="400px" width="400px">
                <Image src="/pikachu.png" alt="sdfsd" layout='fill'sadfe />
              </Box>
              <Box height="200px">
                <Button bg="#E3350D" color="white" size="md">
                  <Link href="/UserLogin">Login</Link>
                </Button>
              </Box>
            </SimpleGrid>
          </Container>
        </Container>
      </VStack>
    </>
  );
}
