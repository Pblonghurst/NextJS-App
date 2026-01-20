"use server";
import { signIn, signOut } from "@/auth";

export const login = async () => {
    await signIn("cognito", {callbackUrl: "/"});
}

export const logout = async () => {
    await signOut();
}