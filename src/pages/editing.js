import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function EditingPage() {
  return (
    <Layout>
      <WrapperStyles>
        <SectionStyles className="apply-max-width-blog section-1">
          <h1 className="center-text">Concept Editing</h1>
          <p className="center-text">Why you need us</p>
          <p>
            Writing a story can be a lonely calling. you often just need someone
            to brainstorm with or someone to take a step back to see the big
            picture. That is easy to miss when every detail of your story is
            under scrutiny. It's like missing the forest for the trees. That's
            where we come in. Show us your forest!
          </p>
          <hr />
          <p className="center-text">What you get</p>
          <div className="jc-center">
            <ul>
              <li>Full manuscript concept edit and review</li>
              <li>40 minute zoom-call follow-up</li>
              <li>Easy to read physical critique</li>
              <li>List of customized, supplemental resources</li>
            </ul>
          </div>
          <hr />
          <p className="center-text">What you pay</p>
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

        <SectionStyles>
          <div className="apply-max-width-blog section-2">
            <h1 className="center-text">Copy Editing</h1>
            <p className="center-text">Why you need us</p>
            <p>
              Once you have your story structure perfected, you still have a few
              grammatical snags you need to eliminate. It is invaluable to have
              someone - besides you - check for all those errant commas and
              spelling mixups. We've got eyes for your novel!
            </p>
            <hr />
            <p className="center-text">What you get</p>
            <div className="jc-center">
              <ul>
                <li>Full manuscript copy edit and review</li>
                <li>Easy to read physical critique</li>
                <li>List of customized, supplemental resources</li>
              </ul>
            </div>
            <hr />
            <p className="center-text">What you pay</p>
            <div className="jc-center">
              <ul>
                <li>$150 for up to 6,000 words</li>
                <li>$26 for each additional 1,000 words</li>
              </ul>
            </div>
            <ButtonWrapper>
              <Link className="button" to="/connect">
                Yes Please!
              </Link>
            </ButtonWrapper>
          </div>
        </SectionStyles>

        {/* <SectionStyles> */}
        {/*   <h1 className="center-text">Combined</h1> */}
        {/*   <p className="center-text">Why you need us</p> */}
        {/*   <p> */}
        {/*     If you're really committed and your work needs, well, work. We have */}
        {/*     been there! We will support you through your concept and copy edit */}
        {/*     with everything from each of the individual packages plus two */}
        {/*     additional zoom calls. Because you're worth it and this will be fun! */}
        {/*   </p> */}
        {/*   <p> */}
        {/*     {' '} */}
        {/*     Oh, did we mention a discount?{' '} */}
        {/*     <span role="img" aria-label="happy hearts emoji"> */}
        {/*       🥰 */}
        {/*     </span> */}
        {/*   </p> */}
        {/*   <hr /> */}
        {/*   <p className="center-text">What you get</p> */}
        {/*   <div className="jc-center"> */}
        {/*     <ul> */}
        {/*       <li>Full manuscript concept edit and review</li> */}
        {/*       <li>Full manuscript copy edit and review</li> */}
        {/*       <li>Three 45 minute zoom-call follow-ups</li> */}
        {/*       <li>Easy to read physical critiques</li> */}
        {/*       <li>List of customized, supplemental resources</li> */}
        {/*     </ul> */}
        {/*   </div> */}
        {/*   <hr /> */}
        {/*   <p className="center-text">What you pay</p> */}
        {/*   <div className="jc-center"> */}
        {/*     <ul> */}
        {/*       <p>Concept</p> */}
        {/*       <li>$120 for up to 29,999 words</li> */}
        {/*       <li>$240 for 30,000 - 69,999 words</li> */}
        {/*       <li>$340 for 70,000 - 100,000 words</li> */}
        {/*       <p>Copy</p> */}
        {/*       <li>$150 for up to 6,000 words</li> */}
        {/*       <li>$22 for each additional 1,000 words</li> */}
        {/*     </ul> */}
        {/*   </div> */}
        {/*   <ButtonWrapper> */}
        {/*     <Link className="button" to="/connect"> */}
        {/*       Obviously */}
        {/*     </Link> */}
        {/*   </ButtonWrapper> */}
        {/* </SectionStyles> */}
      </WrapperStyles>
    </Layout>
  )
}

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 1em;
  }

  div:nth-child(2) {
    background-color: var(--orange-light);
    width: 100vw;
  }
`

const SectionStyles = styled.div``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2em;

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
