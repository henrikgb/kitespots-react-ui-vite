import { type ReactNode } from "react";
export const BoxFlexRow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
      {children}
    </div>
  );
};
