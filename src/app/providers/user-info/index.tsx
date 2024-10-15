import { UserInfo } from "@/lib/types";
import { getUserInfo } from "@/lib/utils";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserInfoContextType ={
  userInfo: UserInfo | null;
  // eslint-disable-next-line no-unused-vars
  setUserInfo: (newUserInfo: UserInfo) => void;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

/**
 * the UserInfoProvider component is a wrapper that provides the userInfo values from the local storage
 *
 * @param {UserInfoProviderProps} props - The props for the UserInfoProvider component.
 * @returns {JSX.Element} The JSX element representing the UserInfoProvider component.
 */
export const UserInfoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfoState] = useState<UserInfo | null>(null);
  const setUserInfo = (newUserInfo: UserInfo): void => {
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    setUserInfoState(newUserInfo);
  };

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = (): UserInfoContextType => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};
