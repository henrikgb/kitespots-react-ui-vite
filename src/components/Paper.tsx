import { type ReactNode } from "react";

interface PaperProps {
  padding?: 0 | 8 | 20;
  children: ReactNode;
  width?: "w-fit" | "w-full";
  backgroundColor?: "bg-webPageContainerBody" | "bg-webPageBodyBackground";
}
export const Paper = ({
  padding = 20,
  children,
  width = "w-fit",
  backgroundColor = "bg-webPageContainerBody",
}: PaperProps) => {
  return (
    <div
      className={`${width} border-b-gray-800 shadow-2xl ${backgroundColor}`}
      style={{ padding: padding }}
    >
      {children}
    </div>
  );
};
