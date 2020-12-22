import {React, useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Stack,
  VStack,
  Button,
  Radio,
  RadioGroup,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Center,
} from "@chakra-ui/react";
import {CustomCheckbox} from "../ui/CustomCheckbox";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/date-picker.css";

import {Formik, Form, Field} from "formik";
import {AuthContext} from "../auth/AuthContext";
import {getMovieById, addMovie, editMovie} from "./MoviesService";

const AddMovie = (props) => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    genre: "",
    release_date: "",
    poster: "",
    seeking_talent: false,
    actors: {actor_ids: []},
  });
  const [selectedActors, setSelectedActors] = useState([]);
  const [seekingTalent, setSeekingTalent] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {token} = useContext(AuthContext);
  const toast = useToast();
  const history = useHistory();
  const movieId = props.match.params.movieId;
  const actionType = props.match.url.includes("edit") ? "edit" : "add";

  useEffect(() => {
    if (actionType === "edit") {
      getMovieById(movieId).then((res) => {
        if (res.success) {
          let movieInitialValues = {
            title: res.movie.title,
            genre: res.movie.genre,
            release_date: res.movie.release_date,
            poster: res.movie.poster,
            seeking_talent: res.movie.seeking_talent,
            actors: {actor_ids: res.movie.actors.map((actor) => actor.id)},
          };
          setSeekingTalent(res.movie.seeking_talent);
          setSelectedActors(res.movie.actors.map((actor) => actor.id));
          setInitialValues(movieInitialValues);
        } else {
          history.push("/404");
        }
      });
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.genre) {
      errors.genre = "Required";
    }

    values.release_date = selectedDate;
    if (!values.release_date) {
      errors.release_date = "Required";
    }

    if (values.poster) {
      try {
        new URL(values.poster);
      } catch (e) {
        errors.poster = "Invalid image url";
      }
    }

    values.seeking_talent = seekingTalent;
    if (!values.seeking_talent) {
      errors.seeking_talent = "Required";
    }

    return errors;
  };

  const checkActors = (e) => {
    let newSelectedActors = e.map((i) => Number(i));
    setSelectedActors(newSelectedActors);
    console.log(newSelectedActors);
  };

  const callMovieApi = async (values, actions, actionType) => {
    var res;
    console.log(values);
    if (actionType === "edit") {
      res = await editMovie(values, movieId, token);
    } else {
      res = await addMovie(values, token);
    }
    if (res.success) {
      actions.setSubmitting(false);
      toast({
        title: actionType === "edit" ? "Edit movie" : "Add movie",
        description:
          actionType === "edit"
            ? "Movie information updated successfully."
            : "Movie added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      actions.setSubmitting(false);
      toast({
        title: "Error",
        description: "An error has occured!",
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
      py="20"
      centerContent
    >
      <Box px="10" pt="5">
        <Text textStyle="title">
          {actionType === "edit" ? "Edit Movie" : "Add a new movie"}
        </Text>
      </Box>

      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validate={validate}
        onSubmit={(values, actions) => {
          values.actors.actors_id = selectedActors;
          values.seeking_talent = seekingTalent === "true" ? true : false;
          if (actionType === "edit") {
            callMovieApi(values, actions, "edit");
          } else {
            callMovieApi(values, actions, "add");
          }
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
              <Field name="title">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                    isRequired
                  >
                    <FormLabel htmlFor="title">Movie Title</FormLabel>
                    <Input
                      {...field}
                      id="title"
                      variant="filled"
                      placeholder="title"
                    />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="genre">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.genre && form.touched.genre}
                    isRequired
                  >
                    <FormLabel htmlFor="genre">Genre</FormLabel>
                    <Input
                      {...field}
                      id="genre"
                      variant="filled"
                      placeholder="genre"
                    />
                    <FormErrorMessage>{form.errors.genre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="poster">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.poster && form.touched.poster}
                  >
                    <FormLabel htmlFor="poster">Poster</FormLabel>
                    <Input
                      {...field}
                      id="poster"
                      variant="filled"
                      placeholder="https://"
                    />
                    <FormErrorMessage>{form.errors.poster}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="release_date">
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.release_date && form.touched.release_date
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="release_date">Release Date</FormLabel>

                    <ReactDatePicker
                      {...field}
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                    ></ReactDatePicker>
                    <FormErrorMessage>
                      {form.errors.release_date}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="seeking_talent">
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.seeking_talent && form.touched.seeking_talent
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="seeking_talent">
                      Seeking talent
                    </FormLabel>

                    <RadioGroup
                      {...field}
                      onChange={setSeekingTalent}
                      value={seekingTalent}
                    >
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
                      {form.errors.seeking_talent}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormControl>
                <FormLabel htmlFor="actors">Actors: </FormLabel>
                <CustomCheckbox
                  data="actors"
                  value={selectedActors}
                  onChange={(e) => {
                    checkActors(e);
                  }}
                ></CustomCheckbox>
              </FormControl>
            </VStack>
            <Center>
              <Button
                mt={8}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddMovie;
