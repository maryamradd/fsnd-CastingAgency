import React from "react";
import {Link as ReactLink} from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Link,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container
      maxW="xl"
      pt="20"
      px="20"
      position="relative"
      minH="calc(100vh - 81px)"
      centerContent
    >
      <Box mt="20" textAlign="center">
        <Text textStyle="heading">404</Text>
        <Text textStyle="title" my="10">
          Not Found
        </Text>
        <Link as={ReactLink} to="/" textStyle="links">
          Go home
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
