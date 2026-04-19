import Link from "next/link";

export const ButtonLogout = () => {
  return (
    <Link
      href="/"
      className="bg-accent text-light-primary px-4 py-2 rounded-md hover:bg-accent/90 cursor-pointer transition-colors inline-block text-center"
    >
      Back to home
    </Link>
  );
};
