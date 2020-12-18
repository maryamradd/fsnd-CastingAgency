import {React, useState, useEffect} from "react";
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
import {Formik, Form, Field} from "formik";
import {useAuth0} from "@auth0/auth0-react";
import {CustomCheckbox} from "../ui/CustomCheckbox";
import {getActorById, addActor, editActor} from "./ActorService";

const AddActor = (props) => {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    image_link: "",
    seeking_role: false,
    movies: {movie_ids: []},
  });
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [seekingRole, setSeekingRole] = useState(false);

  const {getAccessTokenSilently} = useAuth0();
  const toast = useToast();
  const actorId = props.match.params.actorId;

  useEffect(() => {
    if (props.actionType === "edit") {
      getActorById(actorId).then((res) => {
        console.log(res);
        let actorInitialValues = {
          first_name: res.actor.first_name,
          last_name: res.actor.last_name,
          age: res.actor.age,
          gender: res.actor.gender,
          image_link: res.actor.image_link,
          seeking_role: res.actor.seeking_role,
          movies: {movie_ids: res.actor.movies.map((movie) => movie.id)},
        };
        setSeekingRole(res.actor.seeking_role);
        setSelectedMovies(res.actor.movies.map((movie) => movie.id));
        setInitialValues(actorInitialValues);
      });
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    }

    if (!values.age) {
      errors.age = "Required";
    } else if (isNaN(values.age) || values.age > 100) {
      errors.age = "Not a valid age value";
    }

    if (!values.gender) {
      errors.gender = "Required";
    }

    if (values.image_link) {
      try {
        new URL(values.image_link);
      } catch (e) {
        errors.image_link = "Invalid image url";
      }
    }
    values.seeking_role = seekingRole;
    if (!values.seeking_role) {
      errors.seeking_role = "Required";
    }

    return errors;
  };

  const checkMovies = (e) => {
    let newSelectedMovies = e.map((i) => Number(i));
    setSelectedMovies(newSelectedMovies);
  };

  const callActorApi = async (values, actions, actionType) => {
    const token = await getAccessTokenSilently();
    var res;

    if (actionType === "edit") {
      res = await editActor(values, actorId, token);
    } else {
      res = await addActor(values, token);
    }
    console.log(token);
    if (res.success) {
      actions.setSubmitting(false);
      toast({
        title: actionType === "edit" ? "Edit actor" : "Add actor",
        description:
          actionType === "edit"
            ? "Actor information updated successfully."
            : "Actor added successfully.",
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
    <Container maxW="xl" py="10" centerContent>
      <Box px="10" pt="5">
        <Text textStyle="title">
          {props.actionType === "edit" ? "Edit actor" : "Enroll a new actor"}
        </Text>
      </Box>

      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validate={validate}
        onSubmit={(values, actions) => {
          values.age = Number(values.age);
          values.movies.movie_ids = selectedMovies;
          values.seeking_role = seekingRole === "true" ? true : false;
          if (props.actionType === "edit") {
            callActorApi(values, actions, "edit");
          } else {
            callActorApi(values, actions, "add");
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
                      placeholder="First name"
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
                      placeholder="Last name"
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
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.image_link && form.touched.image_link
                    }
                  >
                    <FormLabel htmlFor="image_link">Profile image</FormLabel>
                    <Input
                      {...field}
                      id="image_link"
                      variant="filled"
                      placeholder="https://"
                    />
                    <FormErrorMessage>
                      {form.errors.image_link}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="seeking_role">
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.seeking_role && form.touched.seeking_role
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="seeking_role">Seeking roles</FormLabel>

                    <RadioGroup
                      {...field}
                      onChange={setSeekingRole}
                      value={seekingRole}
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
                      {form.errors.seeking_role}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormControl>
                <FormLabel htmlFor="movies">Movies: </FormLabel>
                <CustomCheckbox
                  data="movies"
                  value={selectedMovies}
                  onChange={(e) => {
                    checkMovies(e);
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

export default AddActor;
