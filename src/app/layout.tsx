import "./globals.css"; // Include your Tailwind CSS or global styles
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
      <body>{children}</body>
    </html>
  );
}
