import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import useReactResponsive from '../hooks/useReactResponsive'
import { TABLET_MAX_WIDTH_PLUS_1 } from '../styles/GlobalStyles'

export default function IndexPage({ data }) {
  const { isMobile } = useReactResponsive()

  return (
    <div>
      <p style={{ marginTop: '144px' }}>
        We are an approachable way to elevate your novel. We believe fiction is
        a tool to access indistinct parts of our souls to find what truly lies
        within us. This tool allows us to find worlds beyond reality, emotions
        deeper than daily life, and come out with deeper beliefs. Our role is to
        journey with you through your discovery and refining processes. So your
        messages, plots, characters, and imagination can reach the people that
        need it.
      </p>
      {isMobile && <DividerStyles></DividerStyles>}
      <Section1>
        <Section1TextWrapper>
          <div>
            <Section1Header>We are Books & Buns!</Section1Header>
            <p>Do you ever need to talk to someone about your writing?</p>
            <p>
              We can’t get enough of it! Often we will be chatting about a
              particular plot or character arc for hours!
            </p>
            <p>
              And it is sooo helpful to be able to have someone to bounce those
              ideas off of.
            </p>
            <p>
              Books and Buns was created for those of you that are looking for
              your writing community.
            </p>
            <p>
              Admit it, you need us{' '}
              <span role="img" aria-label="smiley emoji">
                😊
              </span>
            </p>
            <p>
              So let us in! What are you working on that’s got you stuck or
              excited? Email us or sign up for a package. However you choose, we
              can’t wait to hear from you{' '}
              <span role="img" aria-label="kissey emojis">
                💋💋
              </span>
            </p>
          </div>
        </Section1TextWrapper>
        <Img
          style={{
            width: '40vw',
          }}
          fluid={data.indexPageImg.childImageSharp.fluid}
        />
      </Section1>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: '#E0A690',
        }}
      >
        {' '}
        POOP
      </div>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: '#D78D70',
        }}
      >
        {' '}
        POOP
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    indexPageImg: file(relativePath: { eq: "beth-linds-piggy-back.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Section1 = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    margin: 32px 0;
    display: flex;
  }
`

const Section1TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    padding-left: 16px;
  }
`

const Section1Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-top: 32px;
`

const DividerStyles = styled.div`
  position: relative;
  margin: 90px 0;
  height: 1px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    );
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: goldenrod;
    border: 1px solid rgb(48, 49, 51);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
  }
`
