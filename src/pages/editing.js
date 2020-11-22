import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MOBILE_MAX_WIDTH, WEB_MIN_WIDTH } from '../styles/GlobalStyles'

export default function EditingPage() {
  return (
    <WrapperStyles>
      <SectionStyles>
        <h1 className="jc-center">Concept Editing</h1>
        <p className="jc-center">Why you need us</p>
        <p>
          Writing a story can be a lonely calling. you often just need someone
          to brainstorm with or someone to take a step back to see the big
          picture. That is easy to miss when every detail of your story is under
          scrutiny. It's like missing the forest for the trees. That's where we
          come in. Show us your forest!
        </p>
        <LineDivider />
        <p className="jc-center">What you get</p>
        <div className="jc-center">
          <ul>
            <li>Full manuscript concept edit and review</li>
            <li>40 minute zoom-call follow-up</li>
            <li>Easy to read physical critique</li>
            <li>List of customized, supplemental resources</li>
          </ul>
        </div>
        <LineDivider />
        <p className="jc-center">What you pay</p>
        <div className="jc-center">
          <ul>
            <li>$299 for {'<60,000'} words</li>
            <li>$399 for 60,000 - 100,000 words</li>
          </ul>
        </div>
        <ButtonWrapper>
          <Link className="button" to="/connect">
            I'm In
          </Link>
        </ButtonWrapper>
      </SectionStyles>
    </WrapperStyles>
  )
}

const LineDivider = () => (
  <div className="jc-center">
    <div
      style={{
        borderBottom: '1px solid black',
        width: '100%',
        margin: '16px 0',
      }}
    ></div>
  </div>
)

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    width: 80%;
  }
`

const SectionStyles = styled.div`
  margin: 48px 0;
  padding: 16px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 0;
    padding: 32px 16px;
  }

  h1 {
    font-size: 2em;
    text-decoration: underline;
  }

  ul {
    @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
      width: 45%;
    }
  }

  li {
    font-size: 1.5em;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 16px;
  }

  a {
    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      width: 100%;
      text-align: center;
      margin-top: 32px;
    }
  }
`
