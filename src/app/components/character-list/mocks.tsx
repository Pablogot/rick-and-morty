
import { GET_CHARACTERS } from ".";

export const queryMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 2,
            count: 20,
            next: 2,
            prev: null,
          },
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              origin: { name: "Earth" },
              location: { name: "Earth" },
              episode: [{ id: "1", name: "Pilot", episode: "S01E01" }],
            },
            // Add more mock characters as needed
          ],
        },
      },
    },
  },
];
