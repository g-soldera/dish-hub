"use client"

import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: var(--secondary-bg);
  height: 5vh;
`

interface FooterProps {}
export function Footer(props: FooterProps) {
  return (
    <>
      <FooterContainer>
        <div className="right">right</div>
        <div className="left">left</div>
      </FooterContainer>
    </>
  )
}
