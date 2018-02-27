import React from 'react'
import styled from 'styled-components'
const config = require('../../../utils/siteConfig')

const Content = styled.div`
  color: ${props => props.theme.post.colors.text};
  line-height: 1.5;

  p {
    margin: 0 0 1em;
    font-size: 1.05em;

    strong {
      letter-spacing: -0.01em;
      color: ${props => props.theme.post.colors.bold};
    }

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.M}) {
      font-size: 1.1em;
    }
    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.XL}) {
      font-size: 1.2em;
    }
  }

  blockquote {
    border: 5px solid ${props => props.theme.post.colors.blockquoteFrame};
    font-style: italic;
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;

    p {
      margin: 0;
    }
    &::after,
    &::before {
      background: ${props => props.theme.post.backgrounds.wrapper};
      height: 5px;
      content: '';
      left: 50%;
      margin-left: -47%;
      position: absolute;
      top: -5px;
      width: 94%;
    }
    &::after {
      top: auto;
      bottom: -5px;
    }

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.L}) {
      padding: 1em 1.8em 1em 2em;
    }
  }
`

const Contact = props => (
  <Content>
    <blockquote>
      Questions or comments? Get in touch{' '}
      <a href="mailto:rich@corderophilosophy.com">via email</a> or{' '}
      <a href="https://twitter.com/corderophi678">Twitter</a>.
    </blockquote>
  </Content>
)

export default Contact
