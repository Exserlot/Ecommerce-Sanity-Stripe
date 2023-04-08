import React from "react";
import { Toaster } from "react-hot-toast";
import { PropTypes } from "prop-types";

import { Layout } from "../components";
import "@/styles/globals.css";
import { StateContext } from "../context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
