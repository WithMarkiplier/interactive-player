/* eslint-disable @next/next/no-page-custom-font */
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import React, { useEffect } from "react";
import { AContext } from "../components/context/app-context";
import { theme } from "../components/theme/theme";
import "../styles/globals.scss";
import "../styles/plyr.css";
import ReactGA from "react-ga";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import "beautiful-react-diagrams/styles.css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { id, name, label, value } = metric;
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js

  // @ts-ignore
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // try {
    // } catch (e) {
    //   console.log(e);
    // }
  }, []);

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
