import { Character } from "@/generated/graphql";
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import CharacterModalBody from "./character-modal-body";

type CharacterModalProps = {
  isOpen: boolean;
  character: Character | null;
  onClose: () => void;
};

/**
 * Component for displaying a character modal dialog.
 *
 * @param {boolean} isOpen - Indicates if the modal is open.
 * @param {Character | null} character - The character object to be displayed in the modal. Can be null.
 * @param {() => void} onClose - Function called when the modal is closed.
 * @returns {JSX.Element | null} The character modal JSX element or null if no character provided.
 */
const CharacterModal = ({
  isOpen,
  character,
  onClose,
}: CharacterModalProps): JSX.Element | null => {
  const backgroundColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={backgroundColor}>
        {character?.name ? <ModalHeader>{character.name}</ModalHeader> : null}
        <ModalCloseButton />
        {character ? (
          <CharacterModalBody character={character} />
        ) : null}
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose} name="Close" aria-label="Close">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CharacterModal;
