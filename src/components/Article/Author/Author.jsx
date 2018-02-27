import React from 'react'
const config = require('../../../utils/siteConfig')
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.section`
  border-top: 2px dotted ${props => props.theme.post.colors.authorBorder};
  margin: 3em 0 0;
  padding: 2em 0 0;
`

const Text = styled.p`
  color: ${props => props.theme.post.colors.author};
  line-height: 1.4;
  margin: 0;
  strong {
    color: ${props => props.theme.post.colors.bold};
  }
`

const Avatar = styled.span`
  border: 3px solid ${props => props.theme.post.colors.authorBorder};
  background: ${props => props.theme.post.colors.authorLogoBg};
  color: ${props => props.theme.post.colors.authorLogoText};
  border-radius: 100%;
  float: left;
  height: 40px;
  width: 40px;
  margin: -0.5em 1em 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

const Author = () => {
  const content = `<strong>${config.authorName}</strong> ${
    config.authorDescription
  }`

  return (
    <Wrapper>
      <Avatar>RC</Avatar>
      <Text dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  )
}

export default Author
