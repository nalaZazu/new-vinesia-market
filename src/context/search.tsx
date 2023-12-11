import { createContext, useContext, useState } from "react";

const Context = createContext({});

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  
  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useSearchContext() {
  return useContext(Context);
}