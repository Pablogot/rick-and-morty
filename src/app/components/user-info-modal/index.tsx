import { UserInfo } from "@/lib/types";
import { SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { UserInfoForm } from "../user-info-form";
import { getUserButtonText } from "./util";

/**
 * UserInfoModal component
 *
 * @param {UserInfoModalProps} props - The props for the UserInfoModal component.
 * @returns {JSX.Element} The JSX element representing the UserInfoModal component.
 */
const UserInfoModal = ({
  userInfo,
}: {
  userInfo: UserInfo | null;
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue("gray.50", "gray.800");

  const handleEdit = (): void => {
    onOpen();
  };

  const userButtonText = getUserButtonText(userInfo);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent bg={backgroundColor}>
          <ModalHeader>Edit user Information</ModalHeader>
          <ModalCloseButton />
          <Box padding="5">
            <UserInfoForm onSubmit={() => onClose()} />
          </Box>
        </ModalContent>
      </Modal>
      {userInfo && userButtonText ? (
        <Button
          variant="outline"
          onClick={handleEdit}
          name={userButtonText}
          aria-label={userButtonText}
        >
          <SettingsIcon mr="2" />
          {userButtonText}
        </Button>
      ) : null}
    </>
  );
};
export { UserInfoModal };
