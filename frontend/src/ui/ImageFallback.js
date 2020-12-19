import {Text, Flex} from "@chakra-ui/react";
import {ViewOffIcon} from "@chakra-ui/icons";

export const ImageFallback = () => {
  return (
    <Flex
      maxW="xs"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      opacity="0.50"
      h="250px"
      mx="auto"
      my="0"
    >
      <ViewOffIcon />
      <Text mt="2">image not available</Text>
    </Flex>
  );
};
