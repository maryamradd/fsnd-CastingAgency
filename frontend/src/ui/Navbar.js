import React from "react";
import {NavLink} from "react-router-dom";
import {Flex, Spacer, Box, useColorMode} from "@chakra-ui/react";
import {Avatar, AvatarBadge, Button} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import {Link} from "@chakra-ui/react";

export const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isAuthenticated = false;
  return (
    <div>
      <Flex pt="8" pb="4" px="8" borderBottom="1px" borderColor="gray.200">
        <Box px="4">
          <NavLink to="/">CastingAgency</NavLink>
        </Box>
        <Box px="4">
          <NavLink to="/actors">
            <Button colorScheme="teal" variant="ghost" borderRadius="8px">
              Actors
            </Button>
          </NavLink>
        </Box>
        <Box px="4">
          <NavLink to="/movies">
            <Button colorScheme="teal" variant="ghost" borderRadius="8px">
              Movies
            </Button>
          </NavLink>
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

        {isAuthenticated ? (
          <Box px="4" py="1">
            {" "}
            <Avatar mr="16px" size="sm" name="fdfdame" loading="lazy" />
          </Box>
        ) : (
          <Box px="4">
            <Button colorScheme="teal" variant="ghost" borderRadius="8px">
              Log in
            </Button>
            <Button colorScheme="teal">Sign Up</Button>
          </Box>
        )}
      </Flex>
    </div>
  );
};
