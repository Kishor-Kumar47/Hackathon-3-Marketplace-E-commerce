
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/Footer";
// import { useRouter } from "next/router";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Furniture Store",
//   description: " by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const router = useRouter();
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//         <Footer/>
//         </body>
//     </html>
      
      
  
//   );
// }






import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "../../StoreProvider/StoreProvider";




export const metadata: Metadata = {
  title: "Furniture Store",
  description: " by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>

      <ClerkProvider>

    <html lang="en">
      <body >

        {children}
        <Footer/>
        </body>
    </html>
      </ClerkProvider>
    </StoreProvider>
  
  );
}






















