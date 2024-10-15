import { UserInfo } from "@/lib/types";

export const getUserButtonText = (userinfo: UserInfo |null): string | null =>{
  if (!userinfo || !userinfo.jobTitle || !userinfo.userName) {
    return null;
  }
  return `${userinfo.userName} the ${userinfo.jobTitle}`;
};
