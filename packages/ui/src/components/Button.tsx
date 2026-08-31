import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md';

  const variantStyles = {
    // Primary CTA: Energetic Orange (#F97316)
    primary:
      'bg-[#F97316] text-white hover:bg-[#EA580C] focus:ring-[#F97316] shadow-sm',
    // Secondary: Dark Charcoal (#0F172A)
    secondary:
      'bg-[#0F172A] text-white hover:bg-[#1E293B] focus:ring-[#0F172A] shadow-sm',
    // Outline: Stark White (#FFFFFF) with neutral border
    outline:
      'bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F8FAFC] focus:ring-[#0F172A]',
    // Ghost
    ghost:
      'bg-transparent text-[#0F172A] hover:bg-[#F1F5F9] focus:ring-[#0F172A]',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
