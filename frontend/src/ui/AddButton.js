import React from "react";
import {NavLink} from "react-router-dom";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

const AddButton = ({action, actionLink}) => {
  return (
    <Box>
      <NavLink to={actionLink}>
        <Button
          maxW="md"
          w="150px"
          h="150px"
          boxShadow="base"
          borderStyle="dashed"
          borderColor="teal.500"
          borderRadius="md"
          opacity="1"
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <AddIcon
            display="block"
            w={6}
            h={6}
            pr="2"
            position="absolute"
            top="30%"
            right="40%"
          ></AddIcon>
          <Text display="block" fontSize="xl" mt="8">
            {action}
          </Text>
        </Button>
      </NavLink>
    </Box>
  );
};

export default AddButton;
