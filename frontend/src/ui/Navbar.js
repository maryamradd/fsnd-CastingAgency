import {React, useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {
  Flex,
  Spacer,
  Box,
  useColorMode,
  useColorModeValue,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import {Avatar, AvatarBadge, Button} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
export const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  return (
    <div>
      <Flex
        pt="6"
        pb="4"
        px="8"
        borderBottom="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Box px="4">
          <NavLink to="/">CA</NavLink>
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
                      <VStack w="xs">
                        <NavLink to="/">Settings</NavLink>
                        <Button
                          colorScheme="teal"
                          onClick={() =>
                            logout({returnTo: window.location.origin})
                          }
                        >
                          Log out
                        </Button>
                      </VStack>
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
    </div>
  );
};
