import type { Metadata } from "next";
import "./globals.css";
import { ReactReduxProvider } from "./react-redux-provider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >

        <ReactReduxProvider>
        {children}
        </ReactReduxProvider>
       
      </body>
    </html>
  );
}
