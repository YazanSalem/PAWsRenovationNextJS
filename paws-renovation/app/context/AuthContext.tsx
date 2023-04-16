"use client";

import React, { useState, createContext } from "react";

interface User {
  id: number;
  email: string;
  password: string;
  firstName: string,
  lastName: string,
  image: string,
  address: string,
  phone: string,
  major: string,
  minor: string,
  country: string,
  city: string,
  state: string,
  zip: number,
  isCommuting: boolean,
  advisorId: number
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State{
    setAuthState: React.Dispatch<React.SetStateAction<State>>
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {}
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });

  return (
    <AuthenticationContext.Provider value={{
        ...authState,
        setAuthState
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
