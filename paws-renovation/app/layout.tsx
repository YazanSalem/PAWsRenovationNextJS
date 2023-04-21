import AuthContext from './context/AuthContext'
import './globals.css'
import "react-datepicker/dist/react-datepicker.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-white">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-full bg-white">
        <AuthContext>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
