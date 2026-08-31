import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full h-10 px-3 py-2 bg-white border text-[#0F172A] placeholder-[#94A3B8] rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent ${
          error ? 'border-red-500' : 'border-[#E2E8F0]'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
      {!error && helperText && (
        <span className="text-xs text-[#64748B]">{helperText}</span>
      )}
    </div>
  );
};
