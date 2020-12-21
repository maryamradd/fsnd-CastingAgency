import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.700", "whiteAlpha.900")(props),
        fontFamily: "Lora, serif",
        fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700,
        },
      },
      label: {color: mode("gray.700", "gray.500")(props)},
    }),
  },
  textStyles: {
    heading: {
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: {base: "2rem", md: "3.5rem"},
    },
    subheading: {
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: {base: "1.70rem", md: "2.70rem"},
    },
    title: {
      textAlign: "center",
      fontWeight: "semibold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: {base: "1.60rem", md: "2.60rem"},
    },
    info: {
      textAlign: "center",
      fontWeight: "regular",
      letterSpacing: "0.015em",
      lineHeight: "1.55",
      fontSize: {base: "1.15rem", md: "1.25rem"},
    },
    links: {
      color: "teal.500",
      fontWeight: "semibold",
      transition: "color 0.15s",
      transitionTimingFunction: "ease-out",
      _hover: {
        color: "teal.600",
      },
    },
  },
});

export default customTheme;
