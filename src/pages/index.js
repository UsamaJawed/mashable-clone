import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export default function IndexPage() {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>This is made using Gatsby Official Tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpeg"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home Page" />;
