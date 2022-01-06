import React from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
