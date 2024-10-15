import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    leonardo: {
      50: "#E6F0FF",
      100: "#CCE0FF",
      200: "#99C2FF",
      300: "#66A3FF",
      400: "#3385FF",
      500: "#0066FF",
      600: "#0052CC",
      700: "#003D99",
      800: "#002966",
      900: "#001433",
    },
    purple: {
      50: "#F2E6FF",
      100: "#E6CCFF",
      200: "#CC99FF",
      300: "#B366FF",
      400: "#9933FF",
      500: "#8000FF",
      600: "#6600CC",
      700: "#4D0099",
      800: "#330066",
      900: "#1A0033",
    },
    gray: {
      50: "#F7F7F7",
      100: "#E6E6E6",
      200: "#CCCCCC",
      300: "#B3B3B3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: "leonardo.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "leonardo.600" : "leonardo.400",
          },
        }),
        outline: (props: { colorMode: string }) => ({
          border: "2px solid",
          borderColor: props.colorMode === "dark" ? "purple.300": "purple.700",
          color: props.colorMode === "dark" ? "purple.300": "purple.700",
        }),
      },
    },
  },
});
