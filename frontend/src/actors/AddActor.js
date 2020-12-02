import {React, useState} from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  VStack,
  Button,
  Radio,
  RadioGroup,
  Select,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {MovieSelect} from "../ui/MovieSelect";

import {Formik, Form, Field} from "formik";

import {getActors} from "../actors/ActorServices";

const AddActor = ({actionType}) => {
  if (actionType === "edit") {
    getActors().then((res) => {
      console.log(res);
    });
  }

  const toast = useToast();
  const [movieSelector, setMovieSelector] = useState([1]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [seekingRole, setSeekingRole] = useState(false);

  const renderMovieSelectors = () => {
    const handleSelector = (e, index) => {
      //delete prev selectors
      let filteredSelectedMovies = selectedMovies.filter((i) => {
        return i.selector !== index;
      });
      if (e === "cancel") {
        setSelectedMovies(filteredSelectedMovies);
        let filteredMovieSelector = movieSelector.filter((i) => {
          return i !== index;
        });

        setMovieSelector(filteredMovieSelector);
        return;
      }
      let newMovies = [
        ...filteredSelectedMovies,
        {selector: index, movie_id: Number(e.target.value)},
      ];

      setSelectedMovies(newMovies);
    };

    return movieSelector.map((index) => {
      return (
        <HStack spacing="8px" mt="10px">
          <MovieSelect
            key={index}
            id="moviesSelector"
            onChange={(e) => handleSelector(e, index)}
          ></MovieSelect>
          <IconButton
            mt="10px"
            icon={<CloseIcon w="9px" />}
            onClick={() => handleSelector("cancel", index)}
          />
        </HStack>
      );
    });
  };

  const addMovieSelector = () => {
    let movieSelectors = [...movieSelector, movieSelector.length + 1];
    setMovieSelector(movieSelectors);
  };

  console.log(selectedMovies);
  console.log(movieSelector);

  const validate = (values) => {
    values.seeking_role = Boolean(seekingRole);
    console.log(values.seeking_role);
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    }

    if (!values.age) {
      errors.age = "Required";
    } else if (isNaN(values.age)) {
      errors.age = "Not a valid age value";
    }

    if (!values.gender) {
      errors.gender = "Required";
    }

    if (!values.seeking_role) {
      errors.seeking_role = "Required";
    }

    return errors;
  };

  return (
    <Container maxW="xl" centerContent>
      <Box px="10" pt="10">
        <Text textStyle="title">Enroll a new actor</Text>
      </Box>

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          image_link: "",
          seeking_role: "",
          movies: {movie_ids: []},
        }}
        validate={validate}
        onSubmit={(values, actions) => {
          values.movies.movie_ids = selectedMovies;
          console.log(values.movies);
          /* axios
            .post(`${api}/actors`, {
              first_name: values.first_name,
              last_name: values.last_name,
              age: values.age,
              gender: values.gender,
              image_link: values.image_link,
              seeking_role: true,
              movies: {
                movie_ids: [1],
              },
            })
            .then((res) => {
              console.log(res);
              actions.setSubmitting(false);
              toast({
                title: "Enroll actor",
                description: "Movie added correctly.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            })
            .catch((err) => {
              console.error(err);
              toast({
                title: "Error",
                description: "err",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
              actions.setSubmitting(false);
            }); */

          setTimeout(() => {
            console.log(values.seeking_role);
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <VStack
              mt="16"
              spacing={8}
              align="stretch"
              w={["xs", "sm", "md", "md"]}
            >
              <Field name="first_name">
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.first_name && form.touched.first_name
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="first_name">First Name</FormLabel>
                    <Input
                      {...field}
                      id="first_name"
                      variant="filled"
                      placeholder="first_name"
                    />
                    <FormErrorMessage>
                      {form.errors.first_name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="last_name">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.last_name && form.touched.last_name}
                    isRequired
                  >
                    <FormLabel htmlFor="last_name">Last Name</FormLabel>
                    <Input
                      {...field}
                      id="last_name"
                      variant="filled"
                      placeholder="last_name"
                    />
                    <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="age">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.age && form.touched.age}
                    isRequired
                  >
                    <FormLabel htmlFor="age">Age</FormLabel>
                    <Input
                      {...field}
                      id="age"
                      variant="filled"
                      placeholder="age"
                    />
                    <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="gender">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.gender && form.touched.gender}
                    isRequired
                  >
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <Input
                      {...field}
                      id="gender"
                      variant="filled"
                      placeholder="gender"
                    />
                    <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="image_link">
                {({field}) => (
                  <FormControl>
                    <FormLabel htmlFor="image_link">Profile image</FormLabel>
                    <Input
                      {...field}
                      id="image_link"
                      variant="filled"
                      placeholder="image_link"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="seeking_role">
                {({form}) => (
                  <FormControl isInvalid={form.errors.seeking_role} isRequired>
                    <FormLabel htmlFor="seeking_role">Seeking roles</FormLabel>

                    <RadioGroup onChange={setSeekingRole} value={seekingRole}>
                      <Stack direction="row" spacing={5}>
                        <Radio colorScheme="green" value="true">
                          Yes
                        </Radio>
                        <Radio colorScheme="red" value="false">
                          No
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormErrorMessage>
                      {form.errors.seeking_role}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormControl>
                <FormLabel htmlFor="image_link">Movies: </FormLabel>
                {renderMovieSelectors()}
              </FormControl>
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={addMovieSelector}
              >
                Add movies
              </Button>
            </VStack>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddActor;
