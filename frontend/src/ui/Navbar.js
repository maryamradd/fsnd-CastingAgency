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
  const [userMetadata, setUserMetadata] = useState(null);
  //const isAuthenticated = false;
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const accessToken = getAccessTokenSilently();
  console.log(accessToken);

  useEffect(() => {
    const getUserMetadata = async () => {
      const {REACT_APP_AUTH0_DOMAIN} = process.env;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: "read:current_user",
        });
        console.log(accessToken);
        const userDetailsByIdUrl = `https://${REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const {user_metadata} = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  console.log(userMetadata);
  return (
    <div>
      <Flex
        pt="6"
        pb="4"
        px="8"
        borderBottom="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <h1>
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            "No user metadata defined"
          )}
        </h1>
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
