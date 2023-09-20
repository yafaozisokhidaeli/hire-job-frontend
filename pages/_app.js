import "../styles/globals.css";
import "../styles/Navbar.css";
import Head from "next/head";
import Script from "next/script";

import { Provider } from "react-redux";
import { store } from "../config/Redux/store";
import { Fragment } from "react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      />
      <Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Fragment>
      {/* <div class="warning hallo">Warning message</div> */}
      <div className="xbox hallo">
        ERR
        <div className="inside">ERR</div>
      </div>

      </SSRProvider>
    </Fragment>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  const token = ctx.req?.cookies?.token || null;
  const refreshToken = ctx.req?.cookies?.refreshToken || null;
  const id = ctx.req?.cookies?.id || null;

  console.log("hallo", token);
  return {
    token: token,
    refreshToken: refreshToken,
    id: id,
  };
};
