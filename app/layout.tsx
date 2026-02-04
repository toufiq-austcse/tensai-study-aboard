import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tensai Study Aboard",
    description: "Tensai Study Abroad helps you navigate the complex world of international education with personalized guidance and support at every step.",
    icons: {
        icon: "./lovable-uploads/cd5a57fa-7ab9-4755-8744-d9764abded44.png",
        apple: "./lovable-uploads/cd5a57fa-7ab9-4755-8744-d9764abded44.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
