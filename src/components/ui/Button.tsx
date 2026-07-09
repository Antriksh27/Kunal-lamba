import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-body font-medium transition-all duration-500 rounded-sm px-8 py-3.5 text-xs uppercase tracking-[0.2em] focus:outline-none';
  
  const variants = {
    primary: 'bg-onyx text-alabaster hover:bg-onyx/80 focus:ring-1 focus:ring-onyx focus:ring-offset-2',
    secondary: 'border border-onyx/20 text-onyx hover:border-onyx hover:bg-onyx hover:text-alabaster focus:ring-1 focus:ring-onyx focus:ring-offset-2',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
