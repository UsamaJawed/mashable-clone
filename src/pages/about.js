import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle={"About Me"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}

export const Head = () => (
  <React.Fragment>
    <title>About Me</title>;
    <meta name="description" content="This is abot me page" />
  </React.Fragment>
);
