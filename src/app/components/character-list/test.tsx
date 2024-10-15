import { customTheme } from "@/app/theme";
import { MockedProvider } from "@apollo/client/testing";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./index";
import { queryMock } from "./mocks";

jest.mock("./character-modal", () => ({
  __esModule: true,
  default: (): JSX.Element => <div data-testid="character-modal" />,
}));

jest.mock("next/navigation", () => ({
  useRouter(): {
    push: jest.Mock;
    replace: jest.Mock;
    } {
    return {
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
  useSearchParams(): {
    get: jest.Mock;
    } {
    return {
      get: jest.fn(),
    };
  },
  usePathname(): string {
    return "";
  },
}));

describe("CharacterList", () => {
  it("renders loading state", () => {
    render(
      <ChakraProvider theme={customTheme}>
        <MockedProvider mocks={queryMock} addTypename={false}>
          <CharacterList page={1} />
        </MockedProvider>
      </ChakraProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders characters after loading", async () => {
    render(
      <ChakraProvider theme={customTheme}>
        <MockedProvider mocks={queryMock} addTypename={false}>
          <CharacterList page={1} />
        </MockedProvider>
      </ChakraProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    });

    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
  });

  it("renders pagination", async () => {
    render(
      <ChakraProvider theme={customTheme}>
        <MockedProvider mocks={queryMock} addTypename={false}>
          <CharacterList page={1} />
        </MockedProvider>
      </ChakraProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
    });
  });
});
