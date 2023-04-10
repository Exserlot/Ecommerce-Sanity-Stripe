import React from "react";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "@/styles/globals.css";
import { StateContext } from "../context/StateContext";

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
