import {React, useContext, useState, useRef, useEffect} from "react";
import {Link as ReactLink, NavLink, useHistory} from "react-router-dom";
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
import {ImageFallback} from "../ui/ImageFallback";

import {AuthContext} from "../auth/AuthContext";
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

  const {isAuthenticated, userRole, token} = useContext(AuthContext);
  const cancelRef = useRef();
  const toast = useToast();
  const history = useHistory();
  const movieId = props.match.params.movieId;

  useEffect(() => {
    getMovieById(movieId).then((res) => {
      if (res.success) {
        setMovieDetails(res.movie);
      } else {
        history.push("/404");
      }
    });
  }, []);

  const deleteMovieConfirm = async () => {
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
    <Container
      maxW="xl"
      position="relative"
      minH="calc(100vh - 81px)"
      centerContent
    >
      <Box px="10" pt="10">
        <Text textStyle="title">{movieDetails.title}</Text>
      </Box>
      <Stack px="10" py="5" textStyle="info">
        <Center>
          <Box w="320px" h="450px" overflow="hidden" boxShadow="lg">
            <Image
              w="320px"
              h="450px"
              objectFit="cover"
              src={movieDetails.poster}
              alt="Movie poster"
              fallback={<ImageFallback />}
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
        {isAuthenticated &&
        (userRole === "Executive Producer" ||
          userRole === "Casting Director") ? (
          <NavLink to={`/movies/${movieId}/edit`}>
            <Button mr="2">Edit</Button>
          </NavLink>
        ) : null}

        {isAuthenticated && userRole === "Executive Producer" ? (
          <Button ml="2" bg="red.500" onClick={() => setDeleteIsOpen(true)}>
            Delete
          </Button>
        ) : null}
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
