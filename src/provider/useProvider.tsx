"use client";

import { useState } from "react";
import { UserContext } from "@/context/userContext";

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({ name: "Bình" });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}