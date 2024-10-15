import { Info } from "@/generated/graphql";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  info: Info;
  page: number;
};

/**
 * Renders the pagination component.
 *
 * @param {PaginationProps} props - The props for the Pagination component.
 * @returns {JSX.Element} The JSX element representing the pagination component.
 */
const Pagination = ({ info, page }: PaginationProps): JSX.Element => {
  const searchParams = useSearchParams();

  const router = useRouter();

  /*
     handlePageChange sets the page param to enable navigation to a specific page.
  */
  const handlePageChange = (newPage?: number | null): void => {
    if (!newPage) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.replace(`/information?${params.toString()}`);
  };

  const { next, prev, pages } = info;

  return (
    <Flex pt="8" pb="16" alignItems="center" justifyContent="center">
      <Flex gap={4}>
        <Button
          size="xs"
          onClick={() => handlePageChange(prev)}
          disabled={!prev}
          name="Back"
          aria-label="Back"
        >
          <ArrowBackIcon />
        </Button>
        <Text>
          Page {page} of {pages}
        </Text>
        <Button
          size="xs"
          onClick={() => handlePageChange(next)}
          disabled={!next}
          name="Forward"
          aria-label="Forward"
        >
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
