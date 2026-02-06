import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  helper?: string;
  children: ReactNode;
}

export const FormField = ({ label, htmlFor, helper, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold text-mindes-ink dark:text-mindes-soft"
      >
        {label}
      </label>
      {children}
      {helper ? (
        <p className="text-xs text-mindes-muted dark:text-mindes-soft/60">
          {helper}
        </p>
      ) : null}
    </div>
  );
};
