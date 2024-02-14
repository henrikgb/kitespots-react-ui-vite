import { type ReactNode } from "react";

interface PaperProps {
  padding?: 0 | 8 | 20;
  children: ReactNode;
}
export const Paper = ({ padding = 20, children }: PaperProps) => {
  return (
    <div
      className="w-fit border-b-gray-800 shadow-2xl bg-webPageContainerBody"
      style={{ padding: padding }}
    >
      {children}
    </div>
  );
};
