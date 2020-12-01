import React from 'react'
import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, WEB_MIN_WIDTH } from '../styles/GlobalStyles'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/'))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <WrapperStyles>
          <h1>Connect</h1>
          <p className="center-text">
            Need to get a hold of us? Message us on social media, or send us
            something here.
          </p>
          <ContactInfoWrapper>
            <ContactItem>
              <ContactItemHeader>Email</ContactItemHeader>
              <p>books.buns.co@gmail.com</p>
            </ContactItem>
            <ContactItem>
              <ContactItemHeader>Address</ContactItemHeader>
              <p>
                3267 E 3300 S #110 <br />
                Salt Lake City, UT 84109
              </p>
            </ContactItem>
          </ContactInfoWrapper>
        </WrapperStyles>
      </Layout>
    )
  }
}

const FORM_WIDTH_INT = 750

const WrapperStyles = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 2em;
    font-weight: 900;
    margin-top: 64px;
    margin-bottom: 1em;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.7em;
      margin-top: 32px;
      margin-bottom: inherit;
    }
  }
`

// ContactInfo
//

const ContactInfoWrapper = styled.div`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    display: flex;
    justify-content: center;
  }
`

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px 0;
  color: var(--black);
`

const ContactItemHeader = styled.h2`
  font-size: 1.7em;
  text-decoration: underline;
`
