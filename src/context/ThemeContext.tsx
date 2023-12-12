"use client";
import { createContext } from "react";
import { PropsWithChildren, useState } from "react";
type ContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  cart: any;
  setCart: (cart: any) => void;
};
export const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>("");
  const [cart, setCart] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cart, setCart }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
