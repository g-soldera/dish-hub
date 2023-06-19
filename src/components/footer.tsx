"use client"

import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: var(--secondary-bg);
  padding: 2rem 10rem;
`

interface FooterProps {}
export function Footer(props: FooterProps) {
  return (
    <>
      <FooterContainer>
        <div className="right">Socials</div>
        <div className="center">G-SOLDERA</div>
        <div className="left">Other Info</div>
      </FooterContainer>
    </>
  )
}
