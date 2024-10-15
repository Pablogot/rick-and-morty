import { useUserInfo } from "@/app/providers/user-info";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

type UserInfoFormProps = {
  onSubmit?: () => void;
};

/**
 * UserInfoForm component
 *
 * @param {UserInfoFormProps} props - The props for the UserInfoForm component.
 * @returns {JSX.Element} The JSX element representing the UserInfoForm component.
 */
const UserInfoForm = ({ onSubmit }: UserInfoFormProps): JSX.Element => {
  const { userInfo, setUserInfo } = useUserInfo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    /*
      userName and jobTitle are required fields and will always be there
    */
    const newUserInfo = {
      userName: formData.get("userName") as string,
      jobTitle: formData.get("jobTitle") as string,
    };
    setUserInfo(newUserInfo);
    if (onSubmit !== undefined) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="5" width="full">
        <Flex direction="column">
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              width="full"
              name="userName"
              defaultValue={userInfo?.userName}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Job Title</FormLabel>
            <Input name="jobTitle" defaultValue={userInfo?.jobTitle} />
          </FormControl>
        </Flex>
        <Flex direction="row" justifyContent="end" width="full">
          <Button
            type="submit"
            colorScheme="blue"
            name="Save"
            aria-label="Save"
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
export { UserInfoForm };
