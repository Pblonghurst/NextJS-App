'use client';

import { logout } from "@/lib/actions/auth";


export const ButtonLogout = () => {
    return (
        <button 
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer" 
            onClick={() => logout()}>
            Logout
        </button>
    )
}