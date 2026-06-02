import Link from "next/link";

type BrandButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
};

function BrandButton({
  href,
  children,
  className = "",
  onClick,
  type = "button",
}: BrandButtonProps) {
  const baseClass =
    " items-center px-6 py-2.5 border-2 border-brand-green bg-brand-green text-white text-sm font-medium rounded-full hover:bg-transparent hover:text-brand-green transition-all duration-300 shadow-md hover:shadow-none";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default BrandButton;
