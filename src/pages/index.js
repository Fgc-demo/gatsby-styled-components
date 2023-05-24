import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create an ExternalLink component that'll render an <a> tag with some styles
const ExternalLink = styled.a`
  text-decoration: none;
  color: #1e88e5;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  text-align: center;
  border-radius: 10px;
  padding: 5.5rem;
  background: papayawhip;
  margin: 3rem auto 0 auto;
  max-width: 800px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const IndexPage = ({ serverData }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Title>Hello World, SSR Page with Dogs</Title>

        <Img alt="Happy dog" src={serverData.message} />

        <p>
          <ExternalLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/">
            gatsby-plugin-styled-component docs
          </ExternalLink>
        </p>
      </Wrapper>
    </Fragment>
  );
};

export default IndexPage;

export const head = () => {
  return (
    <>
      <title>Gatsby Styled Components</title>
      <meta
        name="description"
        content="Gatsby example site using Styled Components"
      />
      <meta name="referrer" content="origin" />
    </>
  );
};

// The rest of the page
export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
