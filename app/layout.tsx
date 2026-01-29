import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lila abdelnaser",
  description: "Modern & Minimalist portfolio",
  icons: {
    icon: "/Gemini_Generated_Image_xft5tixft5tixft5.png", 
  },
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div id="theme-wrapper">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  </body>
</html>

  );
}
