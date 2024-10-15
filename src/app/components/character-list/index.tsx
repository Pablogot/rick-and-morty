import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Character, Query } from "../../../generated/graphql";
import CharacterModal from "../character-modal";
import Loading from "../loading";
import Pagination from "../pagination";
import { Status } from "../status";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        image
        origin {
          name
        }
        location {
          name
        }
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;

type CharacterListProps = { page: number };

/**
 * Functional component that displays a list of characters.
 *
 * @param {number} page - The current page number.
 * @returns {JSX.Element}
 */
const CharacterList = ({ page }: CharacterListProps): JSX.Element => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const backgroundColor = useColorModeValue("dark", "gray.800");
  const { loading, error, data } = useQuery<Query>(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    throw new Error(error.message);
  }

  if (!data?.characters) {
    throw new Error("Error queering characters !!");
  }

  const { info, results } = data.characters;
  if (!results?.length || !info) {
    throw new Error("Error queering information !!");
  }

  return (
    <Box width="full" mt={{ base: "5", sm: "10" }}>
      <Grid
        width="full"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="4"
      >
        {(results ?? []).map((character) => {
          if (!character) {
            return null;
          }
          const { id, image, name, status } = character;
          if (!id || !image || !name || !status) {
            return null;
          }

          return (
            <Box
              key={id}
              maxW={"300px"}
              w={"full"}
              boxShadow={"2xl"}
              borderRadius="xl"
              bg={backgroundColor}
              mx={{ base: "auto" }}
            >
              <Image
                fallback={<Box borderTopRadius="inherit" h="300" w="300"></Box>}
                width="300px"
                height="300px"
                loading="lazy"
                borderTopRadius="inherit"
                src={image}
                alt={name}
              />
              <Stack spacing="4" p="4">
                <Flex
                  direction="column"
                  alignItems="baseline"
                  justifyContent="space-between"
                >
                  <Heading fontSize="xl">{name}</Heading>
                  <Status status={status} />
                </Flex>
                <Flex justifyContent="end">
                  <Button
                    bgGradient="linear(to-l, purple.300, leonardo.500)"
                    width="full"
                    variant="gradient"
                    onClick={() => setSelectedCharacter(character)}
                    name="Learn more"
                    aria-label="Learn more"
                  >
                    Learn more
                  </Button>
                </Flex>
              </Stack>
            </Box>
          );
        })}
      </Grid>
      <Pagination page={page} info={info} />

      <CharacterModal
        isOpen={Boolean(selectedCharacter)}
        onClose={() => setSelectedCharacter(null)}
        character={selectedCharacter}
      />
    </Box>
  );
};

export default CharacterList;
