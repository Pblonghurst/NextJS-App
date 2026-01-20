'use client';
import { login } from "@/lib/actions/auth";

export const ButtonLogin = () => {
    return (
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer" 
            onClick={() => login()}>
            Sign in
        </button>
    )
}  