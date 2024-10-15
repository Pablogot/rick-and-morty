"use server";

import { redirect } from "next/navigation";

export const navigateToInformation = async (): Promise<void> => {
  redirect("/information");
};
