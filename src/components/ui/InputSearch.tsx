"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

type InputSearchProps = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
};

export function InputSearch({
  placeholder = "Search…",
  value,
  defaultValue = "",
  onChange,
  onSubmit,
  className = "",
  name = "search",
  disabled = false,
}: InputSearchProps) {
  const isControlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue);
  const inputValue = isControlled ? value : inner;

  const canClear = useMemo(() => inputValue.trim().length > 0, [inputValue]);

  return (
    <div
      className={`group relative flex h-11 w-full items-center rounded-xl border border-white/5 bg-secondary/35 px-3 text-light-primary/90 shadow-sm transition-colors focus-within:border-accent/30 focus-within:bg-secondary/45 ${disabled ? "opacity-60" : ""} ${className}`}
    >
      <Search className="h-4 w-4 text-light-primary/60" />

      <input
        type="search"
        name={name}
        disabled={disabled}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          if (!isControlled) setInner(e.target.value);
          onChange?.(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.(inputValue);
        }}
        className="ml-2 h-full w-full bg-transparent text-sm outline-none placeholder:text-light-primary/40"
      />

      <button
        type="button"
        aria-label="Clear search"
        disabled={!canClear || disabled}
        onClick={() => {
          if (!isControlled) setInner("");
          onChange?.("");
        }}
        className={`ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-primary/30 text-light-primary/70 transition-colors hover:bg-primary/40 hover:text-light-primary disabled:pointer-events-none disabled:opacity-30`}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

