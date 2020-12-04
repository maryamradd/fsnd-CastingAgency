import {React, useState} from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Container,
  Image,
  Text,
  Stack,
  VStack,
  Link,
  Button,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Select,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import DatePicker from "../ui/DatePicker";
const AddMovie = () => {
  const [releaseDate, setReleaseDate] = useState(null);
  const api = "http://127.0.0.1:5000/api";
  const toast = useToast();

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.genre) {
      errors.genre = "Required";
    }

    if (!values.poster) {
      errors.poster = "Required";
    }

    /*  if (!values.release_date) {
      errors.release_date = "Required";
    } else if (values.release_date instanceof Date) {
      errors.release_date = "Invalid Date";
    } */

    /* if (!values.seeking_talent) {
      errors.seeking_talent = "Required";
    } */

    return errors;
  };

  return (
    <Container maxW="xl" centerContent>
      <Box px="10" pt="10">
        <Text textStyle="title"> Add a new movie</Text>
      </Box>

      <Formik
        initialValues={{
          title: "hyiukyhk",
          genre: "",
          poster: "",
          release_date: releaseDate,
        }}
        validate={validate}
        onSubmit={(values, actions) => {
          values.release_date = releaseDate;

          axios
            .post(`${api}/movies`, {
              title: values.title,
              genre: values.genre,
              poster: values.poster,
              release_date: values.release_date,
              seeking_talent: true,
              actors: {
                actor_ids: [1],
              },
            })
            .then((res) => {
              console.log(res);
              actions.setSubmitting(false);
              toast({
                title: "Add Movie",
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
            });

          /* setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000); */
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
                    <FormLabel htmlFor="title">Movie title</FormLabel>
                    <Input {...field} id="title" placeholder="title" />
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
                    isRequired
                  >
                    <FormLabel htmlFor="poster">Poster</FormLabel>
                    <Input
                      {...field}
                      id="poster"
                      variant="filled"
                      placeholder="poster"
                    />
                    <FormErrorMessage>{form.errors.poster}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="release_date">
                {({field, form}) => (
                  <FormControl isRequired>
                    <FormLabel htmlFor="release_date">Release Date</FormLabel>

                    <DatePicker
                      id="release_date"
                      selected={releaseDate}
                      onChange={(date) => setReleaseDate(date)}
                    />
                  </FormControl>
                )}
              </Field>

              {/* <Field name="seeking_talent">
                {({field, form}) => (
                  <FormControl
                    isInvalid={
                      form.errors.seeking_talent && form.touched.seeking_talent
                    }
                    isRequired
                  >
                    <FormLabel htmlFor="seeking_talent">
                      Seeking Talent
                    </FormLabel>

                    {/* <RadioGroup id="seeking_talent" defaultValue="2">
                      <Stack spacing={5} direction="row">
                        <Radio {...field} value="true">
                          Yes
                        </Radio>
                        <Radio {...field} value="false">
                          No
                        </Radio>
                      </Stack>
                    </RadioGroup> 

                    <FormErrorMessage>
                      {form.errors.seeking_talent}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}

              {/* <Field name="actors">
                {({field, form}) => (
                  <FormControl
                    isInvalid={form.errors.actors && form.touched.actors}
                    isRequired
                  >
                    <FormLabel htmlFor="actors">Seeking Talent</FormLabel>

                    {/* <Select id="actors" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>

                    <Checkbox>Checkbox</Checkbox> 

                    <FormErrorMessage>{form.errors.actors}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
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

export default AddMovie;
