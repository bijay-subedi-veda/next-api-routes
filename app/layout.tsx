import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Api Routes",
  description: "For testing the api routes features of next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <div className="flex flex-col w-full h-[100vh]">
          <div className="w-full h-16 flex items-center fixed gap-6 px-6 bg-gray-800 text-white">
            <Link
              href={"/"}
              className="border-b-2 capitalize border-green-600 text-white px-4 py-2"
            >
              home
            </Link>
            <Link
              href={"/users"}
              className="border-b-2 capitalize border-green-600 text-white px-4 py-2"
            >
              Users
            </Link>

            <Link
              href={"/users/create"}
              className="border-b-2 capitalize border-green-600 text-white px-4 py-2"
            >
              create user
            </Link>

            <Link
              href={"/users/update"}
              className="border-b-2 capitalize border-green-600 text-white px-4 py-2"
            >
              update user
            </Link>
          </div>
          <div className="mt-16 w-full h-full overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
