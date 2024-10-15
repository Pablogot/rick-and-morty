import { Roboto } from "next/font/google";
import { ReactElement } from "react";
import { ClientRoot } from "./ClientRoot";
import ErrorBoundary from "./components/error-boundary";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement => (
  <html lang="en" className={roboto.className}>
    <title>Rick and Morty</title>
    <body>
      <ErrorBoundary>
        <ClientRoot>{children}</ClientRoot>
      </ErrorBoundary>
    </body>
  </html>
);

export default RootLayout;
