import React from "react";
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
  Link,
  Button,
} from "@chakra-ui/react";
const ActorPage = () => {
  const property = {
    imageUrl:
      "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: "Female",
    title: "Cat Mckinsy",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Container maxW="xl" centerContent>
      <Box px="10" pt="10">
        <Heading> Actors</Heading>
      </Box>
      <Stack p="10" mt="5" textAlign="center">
        <Image
          maxW="lg"
          maxH="md"
          src={property.imageUrl}
          alt={property.imageAlt}
        />{" "}
        <Text fontSize="2xl">Name: Cat Mcknsy </Text>
        <Text fontSize="2xl">Age: 8 yrs old </Text>
        <Text fontSize="2xl">
          Movies:{" "}
          <Link color="teal.500" href="/actors">
            links can live inline with text
          </Link>
        </Text>
      </Stack>
      <Flex p="2">
        <Button mr="2">Edit</Button>
        <Button ml="2" bg="red.500">
          Delete
        </Button>
      </Flex>
    </Container>
  );
};

export default ActorPage;
