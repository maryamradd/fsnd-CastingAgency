import {React, useState, useRef, useEffect} from "react";
import {Link as ReactLink, NavLink} from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Image,
  Text,
  Stack,
  Link,
  Button,
  Spacer,
  Center,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";

import {useAuth0} from "@auth0/auth0-react";
import {PosterFallback} from "../ui/MoviePosterFallback";
import {getMovieById, deleteMovie} from "./MoviesService";

const MoviePage = (props) => {
  const [movieDetails, setMovieDetails] = useState({
    id: 0,
    title: "",
    poster: "",
    genre: "",
    release_date: "",
    seeking_talent: false,
    actors: [],
  });
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const {getAccessTokenSilently} = useAuth0();
  const cancelRef = useRef();
  const toast = useToast();
  const movieId = props.match.params.movieId;

  useEffect(() => {
    getMovieById(movieId).then((res) => {
      setMovieDetails(res.movie);
    });
  }, []);

  const deleteMovieConfirm = async () => {
    const token = await getAccessTokenSilently();
    const res = await deleteMovie(movieId, token);

    if (res.success) {
      toast({
        title: "Movie deleted",
        description: "Selected movie deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setDeleteIsOpen(false);
    } else {
      toast({
        title: "Error",
        description: "An error has occured, Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="xl" py="10" centerContent>
      <Box px="10" pt="10">
        <Text textStyle="title">{movieDetails.title}</Text>
      </Box>
      <Stack px="10" py="5" textStyle="info">
        <Center>
          <Box h="450px" overflow="hidden" boxShadow="lg">
            <Image
              maxW="xs"
              objectFit="cover"
              src={movieDetails.poster}
              alt="Movie poster"
              fallback={<PosterFallback />}
            />
          </Box>
        </Center>

        {movieDetails.seeking_talent ? <Badge>Seeking talent</Badge> : null}

        <Center>
          <Container maxW="xs" my="4">
            <Flex>
              <Text>Genre: </Text>
              <Spacer />
              <Text>{movieDetails.genre}</Text>
            </Flex>
            <Flex>
              <Text>Release Date: </Text>
              <Spacer />
              <Text>{movieDetails.release_date.substring(7, 16)}</Text>
            </Flex>
          </Container>
        </Center>

        <Text>Actors: </Text>
        {movieDetails.actors.map((actor) => {
          return (
            <Link
              as={ReactLink}
              to={`/actors/${actor.id}`}
              key={actor.id}
              textStyle="links"
            >
              {actor.first_name} {actor.last_name}
            </Link>
          );
        })}
      </Stack>
      <Flex p="2">
        <NavLink to={`/movies/${movieId}/edit`}>
          <Button mr="2">Edit</Button>
        </NavLink>
        <Button ml="2" bg="red.500" onClick={() => setDeleteIsOpen(true)}>
          Delete
        </Button>
      </Flex>
      <AlertDialog
        isOpen={deleteIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setDeleteIsOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Actor
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setDeleteIsOpen(false)}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => deleteMovieConfirm()}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default MoviePage;
