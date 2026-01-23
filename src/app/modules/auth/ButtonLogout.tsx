'use client';

import { logout } from "@/lib/auth";


export const ButtonLogout = () => {
    return (
        <button 
            className="bg-accent text-light-primary px-4 py-2 rounded-md hover:bg-accent/90 cursor-pointer transition-colors" 
            onClick={() => logout()}>
            Logout
        </button>
    )
}