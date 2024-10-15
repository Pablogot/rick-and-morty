import { useUserInfo } from "@/app/providers/user-info";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import RickSvgLogo from "./logo";
import { UserInfoModal } from "./user-info-modal";

export const Header = (): JSX.Element => {
  const { userInfo } = useUserInfo();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      pt="20px"
      pb="20px"
    >
      <Container
        as={Flex}
        maxW="7xl"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="start"
          gap={3}
        >
          <Box w="14" h="14">
            <RickSvgLogo />
          </Box>
          <Heading
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, purple.600, leonardo.700)"
                : "linear(to-r, purple.200, leonardo.300)"
            }
            bgClip="text"
            fontWeight="800"
            fontSize={{ base: "large", md: "xx-large" }}
          >
            Rick & Morty
          </Heading>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="baseline"
          justifyContent="start"
          gap="3"
        >
          <Button
            variant="ghost"
            onClick={toggleColorMode}
            name="Change color mode"
            aria-label="Change color mode"
          >
            {colorMode === "light" ? (
              <MoonIcon />
            ) : (
              <SunIcon color="yellow.400" />
            )}
          </Button>
          <UserInfoModal userInfo={userInfo} />
        </Flex>
      </Container>
    </Box>
  );
};
