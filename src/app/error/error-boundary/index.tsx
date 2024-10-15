"use client";

import { customTheme } from "@/app/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import ErrorComponent from "../error-component";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ChakraProvider theme={customTheme}><ErrorComponent /></ChakraProvider>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
