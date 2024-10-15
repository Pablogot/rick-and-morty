"use server";

import { redirect } from "next/navigation";

export const navigateHome = async (): Promise<void> => {
  redirect("/");
};
