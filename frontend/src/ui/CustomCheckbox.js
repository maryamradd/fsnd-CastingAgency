import {React, useState, useEffect} from "react";
import {
  Stack,
  CheckboxGroup,
  Checkbox,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import {getMovies} from "../movies/MoviesService";
import {getActors} from "../actors/ActorService";

export const CustomCheckbox = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data === "movies") {
      getMovies()
        .then((res) => {
          setData(res.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (props.data === "actors") {
      getActors()
        .then((res) => {
          setData(res.actors);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Box
      boxShadow="base"
      borderRadius="lg"
      maxH="165px"
      overflow="auto"
      bg={useColorModeValue("gray.100", "#ffffff0a")}
    >
      <CheckboxGroup {...props} colorScheme="teal">
        <Stack pl={6} mt={1} spacing={1}>
          {data.map((item) => (
            <Checkbox key={item.id} value={Number(item.id)}>
              {props.data === "movies"
                ? item.title
                : item.first_name + " " + item.last_name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};
