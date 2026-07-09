import { createContext, useContext, RefObject } from "react";

const ScrollContainerContext = createContext<RefObject<HTMLElement> | null>(null);

export const ScrollContainerProvider = ScrollContainerContext.Provider;

export const useScrollContainer = () => {
  const ctx = useContext(ScrollContainerContext);
  if (!ctx) throw new Error("useScrollContainer must be used within ScrollContainerProvider");
  return ctx;
};
