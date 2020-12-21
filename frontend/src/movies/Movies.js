import {React, useContext, useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
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
import MovieCard from "./MovieCard";

import {AuthContext} from "../auth/AuthContext";
import {getMovies} from "./MoviesService";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const toast = useToast();
  const {isAuthenticated, userRole} = useContext(AuthContext);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res.movies);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Error has occured, Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }, []);

  return (
    <>
      <Container maxW="xl" position="relative" minH="calc(100vh - 81px)">
        <SimpleGrid columns={2} spacing={[52, 36]} pt="20">
          <Box>
            <Center h="80px">
              <Text textStyle="heading">Movies</Text>
            </Center>
          </Box>
          <Box>
            <Center h="80px">
              {isAuthenticated && userRole === "Executive Producer" ? (
                <NavLink to="/movies/add">
                  <Button colorScheme="teal" variant="solid">
                    <AddIcon w={5} h={5} pr="2"></AddIcon> Add Movie
                  </Button>
                </NavLink>
              ) : null}
            </Center>
          </Box>
        </SimpleGrid>
        <Center>
          <Flex p="10" mt="5">
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
              {movies.map((movie) => {
                return (
                  <Box key={movie.id}>
                    <MovieCard movie={movie}></MovieCard>
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

export default Movies;
