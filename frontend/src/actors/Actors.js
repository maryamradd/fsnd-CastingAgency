import {React, useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import ActorCard from "./ActorCard";
import {
  Box,
  SimpleGrid,
  Flex,
  Container,
  Button,
  Center,
  Text,
  useToast,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

import {getActors} from "./ActorService";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getActors()
      .then((res) => {
        setActors(res.actors);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "An error has occured, Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }, []);

  return (
    <>
      <Container maxW="xl">
        <SimpleGrid columns={2} spacing={[52, 36]} pt="20">
          <Box>
            <Center h="80px">
              <Text textStyle="heading">Acotrs</Text>
            </Center>
          </Box>
          <Box>
            <Center h="80px">
              <NavLink to="/actors/add">
                <Button colorScheme="teal" variant="solid">
                  <AddIcon w={5} h={5} pr="2"></AddIcon> Add Actor
                </Button>
              </NavLink>
            </Center>
          </Box>
        </SimpleGrid>
        <Center>
          <Flex p="10" mt="5">
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
              {actors.map((actor) => {
                return (
                  <Box key={actor.id}>
                    <ActorCard actor={actor}></ActorCard>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default Actors;
