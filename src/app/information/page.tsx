"use client";

import { ApolloProvider } from "@apollo/client";
import { Container, Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import client from "../../lib/apollo-client";
import CharacterList from "../components/character-list";
import { Header } from "../components/header";
import Loading from "../components/loading";

const CharacterListContainer = (): JSX.Element => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : 1;

  return <CharacterList page={page} />;
};
/**
 * the Information page displays the list of characters and is protected
 *
 * @returns {JSX.Element} The JSX element representing the Information page.
 */
const Information = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Header />
    <Container
      mt="2xl"
      as={Flex}
      maxW="7xl"
      align="center"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Suspense fallback={<Loading />}>
        <CharacterListContainer />
      </Suspense>
    </Container>
  </ApolloProvider>
);
export default Information;
