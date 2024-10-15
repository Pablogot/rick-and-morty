import { Character } from "@/generated/graphql";
import {
  Box,
  Flex,
  Heading,
  Image,
  ModalBody,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Status } from "../../status";

type CharacterModalProps = {
  character: Character;
};

/**
 * Renders the body content of a character modal.
 *
 * @param {Character} character - The character object containing information to be displayed.
 * @returns {JSX.Element | null} The JSX element representing the character modal body or null if no character information is provided.
 */
const CharacterModalBody = ({
  character,
}: CharacterModalProps): JSX.Element | null => {
  const stackBorderColor = useColorModeValue("gray.800", "gray.50");
  const titleBackgroundColor = useColorModeValue("gray.100", "gray.700");

  const {
    image,
    name,
    species,
    type,
    status,
    origin,
    location,
    episode: episodes,
  } = character;

  return (
    <ModalBody>
      <VStack width="full">
        <Flex direction={{ base: "column", sm: "row" }} gap="4" width="full" alignItems="center">
          {image && name ? (
            <Image h="32" w="32" borderRadius="full" src={image} alt={name} />
          ) : null}

          <VStack
            w="full"
            divider={<StackDivider borderColor={stackBorderColor} />}
          >
            {status ? (
              <Flex w="full" direction="row" justifyContent="space-between">
                <Text>Status:</Text>
                <Status status={status} />
              </Flex>
            ) : null}
            {species ? (
              <Flex w="full" direction="row" justifyContent="space-between">
                <Text>Species:</Text>
                <Text>{species}</Text>
              </Flex>
            ) : null}
            {type ? (
              <Flex w="full" direction="row" justifyContent="space-between">
                <Text>Type:</Text>
                <Text>{type}</Text>
              </Flex>
            ) : null}
            {origin?.name ? (
              <Flex w="full" direction="row" justifyContent="space-between">
                <Text>Origin:</Text>
                <Text>{origin?.name}</Text>
              </Flex>
            ) : null}
            {location?.name ? (
              <Flex w="full" direction="row" justifyContent="space-between">
                <Text>Location:</Text>
                <Text>{location?.name}</Text>
              </Flex>
            ) : null}
          </VStack>
        </Flex>
        <Box width="full">
          {episodes.length ? (
            <Flex w="full" direction="column" justifyContent="space-between">
              <Box p="2" mb="2" bg={titleBackgroundColor}>
                <Heading as="h3" size="sm">
                  Episodes:
                </Heading>
              </Box>

              <VStack
                w="full"
                divider={<StackDivider borderColor={stackBorderColor} />}
              >
                {episodes.map((episode) => (
                  <Flex
                    key={episode?.id}
                    w="full"
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Text>{episode?.name}</Text>
                    <Text>{episode?.episode}</Text>
                  </Flex>
                ))}
              </VStack>
            </Flex>
          ) : null}
        </Box>
      </VStack>
    </ModalBody>
  );
};

export default CharacterModalBody;
