import React from "react";
import {NavLink} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Skeleton,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  return (
    <Flex
      pt="6"
      pb="4"
      px="8"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Box px="4">
        <NavLink to="/">
          <Box
            as="button"
            h="42px"
            w="42px"
            color="white"
            borderRadius="50%"
            fontSize="16px"
            fontWeight="bold"
            bg="linear-gradient(299deg, rgba(44,122,123,1) 0%, rgba(79,209,197,1) 100%)"
            _hover={{
              bg: "#38B2AC",
            }}
            _active={{
              bg: "#4FD1C5",
              outline: "none",
            }}
            _focus={{
              outline: "none",
            }}
          >
            CA
          </Box>
        </NavLink>
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
            <SunIcon w={4} h={4} color="gray.600" />
          ) : (
            <MoonIcon w={4} h={4} color="gray.600" />
          )}
        </Button>
      </Box>
      <Skeleton isLoaded={!isLoading}>
        {isAuthenticated ? (
          <Box px="4" py="1">
            <Popover>
              <PopoverTrigger>
                <Avatar
                  mr="16px"
                  size="sm"
                  src={user.picture}
                  loading="lazy"
                  _hover={{cursor: "pointer"}}
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />

                  <PopoverBody w="xs">
                    <Button
                      colorScheme="teal"
                      onClick={() => logout({returnTo: window.location.origin})}
                    >
                      Log out
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        ) : (
          <Box px="4">
            <Button colorScheme="teal" onClick={() => loginWithRedirect()}>
              Log in
            </Button>
          </Box>
        )}
      </Skeleton>
    </Flex>
  );
};

export default Navbar;
