import React from "react";
import App from "next/app";
import { make as Page } from "../src/components/Page/Page.bs";

class BlogApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default BlogApp;
