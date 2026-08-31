import React from 'react';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  headerAction,
}) => {
  return (
    <div
      className={`bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-sm ${className}`}
    >
      {(title || subtitle || headerAction) && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1F5F9]">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-[#0F172A] tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-[#64748B] mt-0.5">{subtitle}</p>
            )}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="text-[#0F172A]">{children}</div>
    </div>
  );
};
