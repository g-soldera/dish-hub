"use client"

import styled from "styled-components"
import { SearchInput } from "./searchInput"

interface HeaderProps {}

const TagHeader = styled.header`
  background-color: var(--secondary-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 10rem;
  width: 100%;

  svg {
    fill: none;
    cursor: pointer;
    width: 1.7rem;
    stroke: var(--primary-text);
  }

  svg:hover {
    stroke: var(--main-color);
  }
`

const Logo = styled.h1`
  width: 50%;
  display: flex;
  font-size: 1.75rem;
  font-weight: 700;

  span {
    margin-left: 0.3rem;
    color: var(--secondary-bg);
    background-color: var(--main-color);
    padding: 0.1rem 0.35rem;
    border-radius: var(--border-radius);
  }
`

export function Header(props: HeaderProps) {
  return (
    <>
      <TagHeader>
        <Logo>
          <a href="/">
            Dish<span>hub</span>
          </a>
        </Logo>
        <SearchInput placeholder="Search" />
      </TagHeader>
    </>
  )
}
