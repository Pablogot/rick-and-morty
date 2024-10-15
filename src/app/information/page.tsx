"use client";

import { ApolloProvider } from "@apollo/client";
import { Container, Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import client from "../../lib/apollo-client";
import CharacterList from "../components/character-list";
import { Header } from "../components/header";

/**
 * the Information page displays the list of characters and is protected
 *
 * @returns {JSX.Element} The JSX element representing the Information page.
 */
const Information = (): JSX.Element => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1;

  return (
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
        <CharacterList page={page}/>
      </Container>
    </ApolloProvider>
  );
};
export default Information;
