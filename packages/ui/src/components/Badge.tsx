import React from 'react';

export interface BadgeProps {
  variant?: 'neutral' | 'accent' | 'outline' | 'success';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className = '',
}) => {
  const variantStyles = {
    neutral: 'bg-[#F1F5F9] text-[#0F172A]',
    accent: 'bg-[#FFF7ED] text-[#F97316] border border-[#FFEDD5]',
    outline: 'border border-[#E2E8F0] text-[#475569] bg-white',
    success: 'bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
