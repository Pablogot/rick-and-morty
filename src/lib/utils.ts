import { UserInfo } from "@/lib/types";

/*
  This function is used to get the user info from the local storage
  and parse it as a UserInfo object
*/
export const getUserInfo = (): UserInfo | null => {
  const storedUserInfo = localStorage.getItem("userInfo");
  if (!storedUserInfo) {
    return null;
  }
  try {
    /*
      The cast is necessary because the data is stored as JSON
    */
    return JSON.parse(storedUserInfo) as UserInfo;
  } catch (error) {
    console.error("Error parsing user info:", error);
    return null;
  }
};

/*
  This function is used to get the status color based on the status of the character
*/
export const getStatusColor = (status: string): "green" | "red" | "grey" => {
  if (status === "Alive") {
    return "green";
  }
  if (status === "Dead") {
    return "red";
  }
  return "grey";
};
