"use client";

import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { UserInfoProvider } from "./providers/user-info";
import { customTheme } from "./theme";

/**
 * The ClientRoot component is a wrapper that adds all the providers to the app
 *
 * @param {ClientRootProps} props - The props for the ClientRoot component.
 * @returns {JSX.Element} The JSX element representing the ClientRoot component.
 */
export const ClientRoot = ({ children }: { children: ReactNode }): JSX.Element => (
  <ApolloProvider client={client}>
    <UserInfoProvider>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </UserInfoProvider>
  </ApolloProvider>
);
