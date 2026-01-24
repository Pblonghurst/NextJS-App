"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

interface InputSearchProps {
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export const InputSearch = ({ disabled = false, className = "", placeholder = "Search…" }: InputSearchProps) => {
  return (
    <div
      className={`group relative flex h-11 w-full items-center rounded-xl border border-white/5 bg-secondary/35 px-3 text-light-primary/90 shadow-sm transition-colors focus-within:border-accent/30 focus-within:bg-secondary/45 ${disabled ? "opacity-60" : ""} ${className}`}
    >
      <Search className="h-4 w-4 text-light-primary/60" />

      <input
        type="search"
        placeholder={placeholder}
        className="ml-2 h-full w-full bg-transparent text-sm outline-none placeholder:text-light-primary/40"
      />

    </div>
  );
}

