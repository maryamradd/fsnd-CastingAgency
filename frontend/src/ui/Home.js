import {React, useContext, useState, useEffect} from "react";
import {Link as ReactLink} from "react-router-dom";
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  useColorModeValue,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import AddButton from "./AddButton";

import {AuthContext} from "../auth/AuthContext";
import {getMovies} from "../movies/MoviesService";
import {getActors} from "../actors/ActorService";

const Home = () => {
  const [moviesCount, setMoviesCount] = useState(0);
  const [actorsCount, setActorsCount] = useState(0);
  const {user, userRole, isAuthenticated} = useContext(AuthContext);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMoviesCount(res.movies.length);
      })
      .catch((err) => {
        console.log(err);
      });

    getActors()
      .then((res) => {
        setActorsCount(res.actors.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      maxW="xl"
      pt="20"
      px="20"
      position="relative"
      minH="calc(100vh - 81px)"
      centerContent
    >
      <Text textStyle="heading">Dashboard</Text>
      <Box mt="20" textAlign="center">
        <Text fontSize="lg">
          Welcome {isAuthenticated ? user.nickname + " !" : "!"}
        </Text>
        <Text fontSize="md">
          you're in the <strong>{isAuthenticated ? userRole : "guest"}</strong>{" "}
          Dashboard
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px" mt="10">
        <Box
          maxW="md"
          w="150px"
          h="150px"
          boxShadow="base"
          borderRadius="md"
          opacity="1"
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Stat pt="8" pl="4">
            <StatLabel fontSize="xl">Actors</StatLabel>
            <StatNumber>{actorsCount}</StatNumber>
            <StatHelpText>
              <Link as={ReactLink} to="/actors" textStyle="links">
                View all actors
              </Link>
            </StatHelpText>
          </Stat>
        </Box>

        <Box
          maxW="md"
          w="150px"
          h="150px"
          boxShadow="base"
          borderRadius="md"
          opacity="1"
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Stat pt="8" pl="4">
            <StatLabel fontSize="xl">Movies</StatLabel>
            <StatNumber>{moviesCount}</StatNumber>
            <StatHelpText>
              <Link as={ReactLink} to="/movies" textStyle="links">
                View all movies
              </Link>
            </StatHelpText>
          </Stat>
        </Box>
        {isAuthenticated && userRole !== "Casting Assistant" ? (
          <>
            <AddButton action="Add actors" actionLink="/actors/add" />
          </>
        ) : null}
        {isAuthenticated && userRole === "Executive Producer" ? (
          <>
            <AddButton action="Add movies" actionLink="/movies/add" />
          </>
        ) : null}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
