import React from 'react'
import styled from 'styled-components'

import useReactResponsive from '../hooks/useReactResponsive'
import bethLindsPiggyBack from '../assets/images/beth-linds-piggy-back.jpg'
import { TABLET_MAX_WIDTH_PLUS_1 } from '../styles/GlobalStyles'

export default function IndexPage({ location: { pathname } }) {
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
      {/* Orange dot divider */}
      {isMobile && <div class="divider div-transparent div-dot"></div>}
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
        <Section1Img
          src={bethLindsPiggyBack}
          alt="Lindsay and Bethany"
          className="border box-shadow"
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

// Section 1
//
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
  font-family: 'Tw Cen Medium Regular';
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-top: 32px;
`

const Section1Img = styled.img`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    width: 40%;
    object-fit: cover;
    margin: 16px;
  }
`
