"use client";

import { UserProvider } from "../context/UserContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </UserProvider>
  );
}
