import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-sans tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-dark text-white hover:bg-gold-400 hover:text-dark border border-dark hover:border-gold-400",
    secondary: "bg-gold-400 text-dark hover:bg-dark hover:text-white",
    outline: "border border-dark text-dark hover:bg-dark hover:text-white",
    ghost: "text-dark hover:text-gold-500 bg-transparent",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-base px-10 py-4",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;