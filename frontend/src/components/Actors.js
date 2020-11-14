import React from "react";
import ActorCard from "./ActorCard";
import {
  Grid,
  GridItem,
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Container,
} from "@chakra-ui/react";

const Actors = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box px="10" pt="10">
          <Heading> Actors</Heading>
        </Box>
        <Flex p="10" mt="5">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            <Box>
              <ActorCard></ActorCard>
            </Box>
            <Box>
              <ActorCard></ActorCard>
            </Box>
            <Box>
              <ActorCard></ActorCard>
            </Box>
            <Box>
              <ActorCard></ActorCard>
            </Box>
            <Box>
              <ActorCard></ActorCard>
            </Box>
            <Box>
              <ActorCard></ActorCard>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </>
  );
};

export default Actors;
