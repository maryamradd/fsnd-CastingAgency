import React from "react";
import {NavLink} from "react-router-dom";
import {
  Box,
  Image,
  Badge,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import {ImageFallback} from "../ui/ActorImageFallback";

const ActorCard = (props) => {
  const {
    id,
    first_name,
    last_name,
    age,
    gender,
    image_link,
    seeking_role,
  } = props.actor;

  return (
    <Container role="group">
      <NavLink to={`/actors/${id}`}>
        <Box
          maxW="md"
          w="250px"
          h="260px"
          rounded="lg"
          borderRadius="sm"
          boxShadow="md"
          bg={useColorModeValue("white", "gray.700")}
          _groupHover={{
            transform: "translateY( -3px ) scale( 1.02 ) ",
            boxShadow: "2xl",
          }}
        >
          <Box w="250px" h="180px" overflow="hidden">
            <Image
              src={image_link}
              alt="actor image"
              fallback={<ImageFallback />}
              objectFit="cover"
              boxSize="250px"
            />
          </Box>
          <Box pb="6" pt="2" pl="4">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {first_name} {last_name}
            </Box>
            <Box d="flex" alignItems="baseline">
              <Box
                mt="4px"
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                {age} yrs
                <Box as="span" opacity={0.7} pl="4px">
                  &bull; {gender}
                </Box>
                {seeking_role ? (
                  <Badge colorScheme="teal" ml="19px">
                    Seeking role
                  </Badge>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
      </NavLink>
    </Container>
  );
};

export default ActorCard;
