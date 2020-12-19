import {Box, Link} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" textAlign="center" position="absolute" bottom="2" w="100%">
      <Link
        href="https://github.com/maryamradd/fsnd-CastingAgency"
        isExternal
        decoration="none"
        fontSize="sm"
        opacity="0.35"
        _hover={{decoration: "none", opacity: 0.75}}
      >
        view src on Github
      </Link>
    </Box>
  );
};

export default Footer;
