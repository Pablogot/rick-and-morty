import { Center, Flex, Spinner } from "@chakra-ui/react";

const Loading = (): JSX.Element => (
  <Flex
    minHeight="100vh"
    width="full"
    alignItems="center"
    justifyContent="center"
  >
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.700"
        size="xl"
      />
    </Center>
  </Flex>
);

export default Loading;
