"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { setUserContext } from "@/lib/helpers";
type User = { email: string; username: string } | null;
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const cached = localStorage.getItem("cachedUser");
    if (cached) {
      setUser(JSON.parse(cached));
    }
  }, []);
  useEffect(() => {
    setUserContext(setUser);
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
