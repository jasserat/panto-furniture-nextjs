import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppProviders from '@/providers/AppProviders';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Panto Furniture - Best Furniture for Your Home",
  description: "Transform your living spaces with Panto's premium furniture collection. Discover chairs, beds, sofas, and lamps designed for modern homes.",
  keywords: ['furniture', 'home decor', 'chairs', 'sofas', 'beds', 'lamps'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>
          <Navbar />
          <main className='min-h-screen'>
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
