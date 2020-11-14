import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Flex, Spacer, Box, useColorMode} from "@chakra-ui/react";
import {Avatar, AvatarBadge, Button} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
export const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <div>
      <Flex pt="8" pb="4" px="8" borderBottom="1px" borderColor="gray.200">
        <Box px="4">
          <Link to="/">CastingAgency</Link>
        </Box>
        <Box px="4">
          <Button colorScheme="teal" variant="ghost" borderRadius="25px">
            <NavLink to="/Actors" activeClassName="red.500"></NavLink>
            Actors
          </Button>
        </Box>
        <Box px="4">
          <Button colorScheme="teal" variant="ghost" borderRadius="25px">
            Movies
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? (
              <SunIcon w={4} h={4} color="red.500" />
            ) : (
              <MoonIcon w={4} h={4} color="red.500" />
            )}
          </Button>
        </Box>
        <Box px="4">
          <Avatar
            w="8"
            h="8"
            mt="1"
            bg="teal.500"
            /* name="Sasuke Uchiha" */
            src="https://bit.ly/broken-link"
          />
        </Box>
      </Flex>
    </div>
  );
};
