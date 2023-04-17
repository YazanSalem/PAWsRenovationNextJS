"use client";

import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

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

  const fetchUser = async () => {
    try {

        setAuthState({
            data: null,
            error: null,
            loading: true
        });  

        const jwt = getCookie("jwt")

        if(!jwt){
            return setAuthState({
                data: null,
                error: null,
                loading: false
            });  
        }

        const response = await axios.get("http://localhost:3000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        axios.defaults.headers.common["Authorixation"] = `Bearer ${jwt}`
        setAuthState({
            data: response.data,
            error: null,
            loading: false
        });  

    } catch (error: any) {
        setAuthState({
            data: null,
            error: error.response.data.errorMessage,
            loading: false
        });  
    }
}


  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{
        ...authState,
        setAuthState
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
