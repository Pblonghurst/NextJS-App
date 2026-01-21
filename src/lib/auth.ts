"use server";
import { signIn, signOut } from "@/auth";

export const login = async () => {
    await signIn("cognito", {callbackUrl: "/"});
}

export const signUp = async () => {
    // Redirect to Cognito sign up - using the same provider but with signup intent
    await signIn("cognito", {callbackUrl: "/", redirect: true});
}

export const logout = async () => {
    await signOut();
}