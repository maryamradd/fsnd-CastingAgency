import React from "react";
import {NavLink} from "react-router-dom";
import {Box, Image, Container, Text, useColorModeValue} from "@chakra-ui/react";
import {PosterFallback} from "../ui/MoviePosterFallback";

const MovieCard = (props) => {
  const {id, title, poster, release_date, actors} = props.movie;

  return (
    <Container>
      <Box
        maxW="md"
        w="250px"
        h="350px"
        rounded="lg"
        borderRadius="sm"
        boxShadow="md"
        role="group"
        bg={useColorModeValue("white", "gray.700")}
      >
        <NavLink to={`/movies/${id}`}>
          <Box
            position="absolute"
            w="250px"
            h="350px"
            py="70px"
            textAlign="center"
            color="gray.300"
            fontWeight="semibold"
            letterSpacing="5px"
            fontSize="xs"
            opacity="0"
            textTransform="uppercase"
            _groupHover={{
              opacity: 1,
              transition: "opacity 0.2s ease-in",
              backgroundImage:
                "linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.762) 94.1%,hsla(0, 0%, 0%, 0.790) 100%)",
            }}
          >
            {release_date.substring(7, 16)}
            <Text as="p" mt="200px" letterSpacing="2px">
              {actors.slice(0, 3).map((actor, i) => {
                if (i === actors.length - 1 || i === 2) {
                  return (
                    <React.Fragment key={actor.id}>
                      {" "}
                      {actor.last_name}
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment key={actor.id}>
                      {" "}
                      {actor.last_name} &bull;
                    </React.Fragment>
                  );
                }
              })}
            </Text>
          </Box>
          <Box
            position="absolute"
            w="250px"
            mx="auto"
            my="auto"
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            textStyle="heading"
            color="white"
            pt="275px"
            as="span"
            _groupHover={{
              transform: "translateY(-60%)",
              transition: "transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)",
            }}
          >
            {title}
          </Box>
          <Image
            w="250px"
            h="350px"
            src={poster}
            alt="movie poster"
            objectFit="cover"
            fallback={<PosterFallback />}
          />
        </NavLink>
      </Box>
    </Container>
  );
};

export default MovieCard;
