import "./globals.css";

export const metadata = {
  title: "Privacy Policy | WHOOP Personal Dashboard",
  description:
    "Privacy Policy for a personal WHOOP dashboard that uses OAuth to access user-selected WHOOP data."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
