import React from "react";
import {Flex, Spacer, Box, useColorMode, Image, Badge} from "@chakra-ui/react";
import {SunIcon, MoonIcon, StarIcon} from "@chakra-ui/icons";
import {Fade, ScaleFade, Slide, SlideFade} from "@chakra-ui/transition";

const ActorCard = () => {
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
    <div>
      <Box maxW="md" w="250px" borderWidth="1px" borderRadius="sm">
        <Image src={property.imageUrl} alt={property.imageAlt} />
        <Box pb="6" pt="2" pl="4">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {property.beds} yrs &bull; {property.baths}
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </div>
  );
};

export default ActorCard;
