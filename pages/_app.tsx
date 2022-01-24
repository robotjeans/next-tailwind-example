import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen">
        <Header />
        <div className="h-screen bg-white dark:bg-black overflow-y-scroll">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
