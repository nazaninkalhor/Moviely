import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: "Moviely",
  description: "This is my Next.js app with Material-UI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white flex flex-col min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
