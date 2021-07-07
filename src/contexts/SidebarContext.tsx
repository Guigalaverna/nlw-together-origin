import React, { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextData {
  isVisible: boolean;
  handleToggleSidebarVisibility: () => void;
}

const Context = createContext({} as ContextData);

export function SidebarProvider({ children }: ProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleSidebarVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <Context.Provider
      value={{
        handleToggleSidebarVisibility,
        isVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useSidebar() {
  return useContext(Context);
}
