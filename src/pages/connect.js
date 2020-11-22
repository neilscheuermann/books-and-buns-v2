import React from 'react'
import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, WEB_MIN_WIDTH } from '../styles/GlobalStyles'
import { navigate } from 'gatsby-link'

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
      <WrapperStyles>
        <h1>Connect with us</h1>
        <div className="jc-center">
          <p style={{ width: '750px' }}>
            Since we work so closely with each project, availability is limited.
            Please send us what you're interested in and we will create your
            schedule.
          </p>
        </div>
        <FormWrapper>
          <FormBackground>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              {/* ============================================== */}

              <InputNameEmailWrapper>
                <InputHalfOrFullWrapper marginRight8px>
                  <Input type="text" name="name" id="name" placeholder="Name" />
                </InputHalfOrFullWrapper>
                <InputHalfOrFullWrapper marginLeft8px>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </InputHalfOrFullWrapper>
              </InputNameEmailWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </InputWrapper>
              <TextAreaWrapper>
                <TextArea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                />
              </TextAreaWrapper>
              <div className="actions">
                <ButtonStyles type="submit" value="Send Message">
                  Send Message
                </ButtonStyles>
              </div>
            </Form>
          </FormBackground>
        </FormWrapper>
        <ContactInfoWrapper>
          <ContactItem>
            <ContactItemHeader>Email</ContactItemHeader>
            <p>books.buns.co@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <ContactItemHeader>Address</ContactItemHeader>
            <p>3267 E 3300 S #110</p>
            <p>Salt Lake City, UT 84109</p>
          </ContactItem>
        </ContactInfoWrapper>
      </WrapperStyles>
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

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.7em;
      margin-top: 32px;
    }
  }
`

// Form
//
const FormWrapper = styled.div`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    display: flex;
    justify-content: center;
  }
`

const FormBackground = styled.div`
  background-color: var(--background-color-light-blue);
  padding: 16px;

  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    width: ${FORM_WIDTH_INT}px;
  }
`

const Form = styled.form`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    width: ${FORM_WIDTH_INT - 32}px;
  }
`

const InputNameEmailWrapper = styled.div`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    display: flex;
  }
`

const InputHalfOrFullWrapper = styled.div`
  width: calc((100% - 16px) / 2);
  background-color: var(--white);
  padding: 10px 30px 9px 22px;
  margin-bottom: 16px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
    padding: 10px 8px 9px 8px;
  }

  ${({ marginRight8px }) =>
    marginRight8px &&
    `
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
      margin-right: 8px;
    }
  `}

  ${({ marginLeft8px }) =>
    marginLeft8px &&
    `
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
      margin-left: 8px;
    }
  `}
`

// Pulled in custom Tw Cen Medium Regular font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
const Input = styled.input`
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`
const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  background-color: var(--white);
  margin-bottom: 16px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 10px 8px 9px 8px;
  }
`

const TextAreaWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  min-height: 120px;
  background-color: var(--white);

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 10px 16px 9px;
  }
`

const TextArea = styled.textarea`
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  overflow: auto;
  resize: vertical;
  background: transparent;
`

const ButtonStyles = styled.button`
  margin-top: 16px;
  width: 100%;
  line-height: 1.2;
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
