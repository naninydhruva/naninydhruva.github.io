import "./globals.css";

export const metadata = {
  title: "Chilakamarri Srinikethan Nydhruva",
  description: "Portfolio of Chilakamarri Srinikethan Nydhruva - Mobile and Web Developer specializing in Flutter, Next.js, and Node.js. Explore projects, skills, and contact information.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Du2GIOjLVE9nYhOvSEjEKMBWkBE7lSHW1WSmPOQuOLA"
        />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
