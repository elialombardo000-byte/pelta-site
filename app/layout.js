import "./globals.css";

export const metadata = {
  title: "PELTA®",
  description: "PELTA® AI Suite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}