"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
type User = { email: string; username: string } | null;

const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const cached = localStorage.getItem("cachedUser");
    if (cached) {
      setUser(JSON.parse(cached));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
