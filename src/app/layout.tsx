import { ReactElement } from "react";
import { ClientRoot } from "./ClientRoot";
import ErrorBoundary from "./components/error-boundary";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement => (
  <html lang="en">
    <title>Rick and Morty</title>
    <body>
      <ErrorBoundary>
        <ClientRoot>{children}</ClientRoot>
      </ErrorBoundary>
    </body>
  </html>
);

export default RootLayout;
