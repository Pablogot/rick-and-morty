"use client";

import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { navigateToInformation } from "./actions";
import { Header } from "./components/header";
import Loading from "./components/loading";
import { UserInfoForm } from "./components/user-info-form";
import { useUserInfo } from "./providers/user-info";

/**
 * the Home page displays the welcome message and the user info form where the user details are set in the local storage
 * if the user details are set, the user is redirected to the Information page
 *
 * @returns {JSX.Element} The JSX element representing the Home page.
 */
const Home = (): JSX.Element => {
  const { userInfo, isLoading } = useUserInfo();

  useEffect(() => {
    if (userInfo) {
      navigateToInformation();
    }
  }, [userInfo]);

  return (
    <>
      <Header />
      <Container
        as={Flex}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex direction="column" width="full" gap="4">
          {isLoading && !userInfo ? (
            <Heading as="h1" size="xl">
              <Loading />
            </Heading>
          ) : null}{" "}
          {!userInfo ? (
            <>
              <Heading as="h1" size="xl">
                Welcome!
              </Heading>
              <Text>Enter your details to get started.</Text>
              <UserInfoForm onSubmit={() => navigateToInformation()} />
            </>
          ) : null}
        </Flex>
      </Container>
    </>
  );
};

export default Home;
