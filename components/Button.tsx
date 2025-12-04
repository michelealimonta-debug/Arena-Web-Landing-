import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase tracking-[0.15em] text-sm font-sans transition-all duration-500 ease-out flex items-center gap-3 group";
  
  const variants = {
    primary: "bg-arena-dark text-arena-light hover:bg-arena-clay hover:text-white",
    outline: "border border-arena-dark text-arena-dark hover:bg-arena-dark hover:text-arena-light"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};