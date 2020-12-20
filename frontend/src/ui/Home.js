import {React, useState, useEffect} from "react";
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

import {useAuth0} from "@auth0/auth0-react";
import {getMovies} from "../movies/MoviesService";
import {getActors} from "../actors/ActorService";

const Home = () => {
  const [moviesCount, setMoviesCount] = useState(0);
  const [actorsCount, setActorsCount] = useState(0);
  const [userMetadata, setUserMetadata] = useState(null);

  const {
    user,
    isAuthenticated,
    getIdTokenClaims,

    getAccessTokenSilently,
  } = useAuth0();

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

    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const {user_metadata} = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
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
      {userMetadata ? (
        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
      ) : (
        "No user metadata defined"
      )}
      <Text textStyle="heading">Dashboard</Text>
      <Box mt="20" textAlign="center">
        <Text fontSize="lg">
          Welcome {isAuthenticated ? user.nickname + " !" : "!"}
        </Text>
        <Text fontSize="md">
          you're in the <strong>{isAuthenticated ? "user" : "guest"}</strong>{" "}
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
        {!isAuthenticated ? null : (
          <>
            <AddButton action="Add actors" actionLink="/actors/add" />
            <AddButton action="Add movies" actionLink="/movies/add" />
          </>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
