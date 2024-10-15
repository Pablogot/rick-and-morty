"use client";

import { ReactNode, useEffect } from "react";
import { navigateHome } from "./actions";

/**
 * the LayoutPrivate component is a wrapper that checks if the user has been set in the local storage
 * if not, it will navigate the user to the home page
 *
 * @param {LayoutPrivateProps} props - The props for the LayoutPrivate component.
 * @returns {JSX.Element} The JSX element representing the LayoutPrivate component.
 */
const LayoutPrivate = ({ children }: { children: ReactNode }): JSX.Element => {
  useEffect(() => {
    const userInfoJSON = localStorage.getItem("userInfo");
    if (userInfoJSON) {
      const userInfo = JSON.parse(userInfoJSON);

      if (!userInfo.userName || !userInfo.jobTitle) {
        navigateHome();
      }
    } else {
      navigateHome();
    }
  }, []);

  return <>{children}</>;
};

export default LayoutPrivate;
