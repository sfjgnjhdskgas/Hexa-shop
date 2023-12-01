"use client";
import { createContext } from "react";
import { PropsWithChildren, useState } from "react";
type ContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
