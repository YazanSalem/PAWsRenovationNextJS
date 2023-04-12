"use client";

import React, { useState, createContext } from "react";

// id  Int @id @default(autoincrement())
//   //can include type later if we get to admin/instructor roles for now everybodys a student until we catch up
//   first_name String
//   last_name String
//   image   String
//   address String
//   phone String  @unique//string phone numbers can reach integer.max
//   email String  @unique
//   major String
//   minor String?
//   country String
//   city  String
//   state String
//   zip Int
//   password  String  @db.Text
//   is_commuting Boolean

//   ToDos ToDo[]
//   Holds Hold[]
//   Courses Course[]
//   FinancialAid  FinancialAid[]

//   advisor_id Int
//   advisor Advisor @relation(fields: [advisor_id], references: [id])

//   createdAt DateTime  @default(now())
//   updatedAt DateTime  @updatedAt
interface User {
  id: number;
  email: string;
  password: string;
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
