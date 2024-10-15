import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Container,
  Flex,
} from "@chakra-ui/react";

const ErrorComponent = (): JSX.Element => (
  <Container
    as={Flex}
    maxW="7xl"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minH="100vh"
  >
    <Alert
      status="error"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      borderRadius="lg"
      maxH="3xl"
      gap="4"
      padding="8"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
          Something went wrong!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
      </AlertDescription>
    </Alert>
  </Container>
);
export default ErrorComponent;
