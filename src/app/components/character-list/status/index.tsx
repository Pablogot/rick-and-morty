import { getStatusColor } from "@/lib/utils";
import { Box, Flex, Text } from "@chakra-ui/react";

/**
 * Props for the Status component.
 */
type StatusProps ={
  /** The status string to display. Can be null or undefined. */
  status?: string | null;
}

/**
 * A component that displays a status indicator with a colored dot and text.
 *
 * @param props - The component props
 * @returns The Status component if a status is provided, otherwise null
 */
const Status = ({ status }: StatusProps): JSX.Element | null => {
  if (!status) {
    return null;
  }
  return (
    <Flex direction="row" gap="2" alignItems="center">
      <Box bg={getStatusColor(status)} w="2" h="2" borderRadius="full"></Box>
      <Text fontSize="sm">{status} </Text>
    </Flex>
  );
};

export { Status };
