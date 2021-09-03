/* eslint-disable @next/next/no-page-custom-font */
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { AContext } from "../components/context/app-context";
import { theme } from "../components/theme/theme";
import "../styles/globals.scss";
import "../styles/plyr.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <AContext.Provider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AContext.Provider>
    </>
  );
};

export default MyApp;
