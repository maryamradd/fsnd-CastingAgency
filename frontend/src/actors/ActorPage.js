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
import {getActorById, deleteActor} from "./ActorService";

const ActorPage = (props) => {
  const [actorDetails, setActorDetails] = useState({
    id: 0,
    first_name: "",
    lastname: "",
    age: "",
    gender: "",
    image_link: "",
    seeking_role: false,
    movies: [],
  });
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const {isAuthenticated, userRole, token} = useContext(AuthContext);
  const cancelRef = useRef();
  const toast = useToast();
  const history = useHistory();
  const actorId = props.match.params.actorId;

  useEffect(() => {
    getActorById(actorId).then((res) => {
      if (res.success) {
        setActorDetails(res.actor);
      } else {
        history.push("/404");
      }
    });
  }, []);

  const deleteActorConfirm = async () => {
    const res = await deleteActor(actorId, token);

    if (res.success) {
      toast({
        title: "Actor deleted",
        description: "Selected actor deleted successfully",
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
        <Text textStyle="title">
          {actorDetails.first_name} {actorDetails.last_name}
        </Text>
      </Box>
      <Stack px="10" py="5" textStyle="info">
        <Center>
          <Box boxSize="xs" overflow="hidden" boxShadow="lg">
            <Image
              w="320"
              h="320"
              objectFit="cover"
              src={actorDetails.image_link}
              alt="Actor image"
              fallback={<ImageFallback />}
            />
          </Box>
        </Center>

        {actorDetails.seeking_role ? <Badge>Seeking role</Badge> : null}

        <Center>
          <Container maxW="3xs" my="4">
            <Flex>
              <Text>Age: </Text>
              <Spacer />
              <Text>{actorDetails.age} yrs</Text>
            </Flex>
            <Flex>
              <Text>Gender: </Text>
              <Spacer />
              <Text>{actorDetails.gender} </Text>
            </Flex>
          </Container>
        </Center>

        <Text>Movies: </Text>
        {actorDetails.movies.map((movie) => {
          return (
            <Link
              as={ReactLink}
              to={`/movies/${movie.id}`}
              key={movie.id}
              textStyle="links"
            >
              {movie.title}
            </Link>
          );
        })}
      </Stack>
      <Flex p="2">
        {isAuthenticated &&
        (userRole === "Executive Producer" ||
          userRole === "Casting Director") ? (
          <NavLink to={`/actors/${actorId}/edit`}>
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
                onClick={() => deleteActorConfirm()}
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

export default ActorPage;
