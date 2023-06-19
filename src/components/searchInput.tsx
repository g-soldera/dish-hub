import styled from "styled-components"
import { SearchIcon } from "./searchIcon"
import { FavoritesIcon } from "./favsIcon"
import { InputHTMLAttributes } from "react"

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const SearchBar = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--primary-bg);
  border-radius: var(--border-radius);
  border: none;
  width: 22vw;

  svg {
    cursor: pointer;
    height: 1.6rem;
    width: 1.2rem;
    fill: var(--primary-text);
  }
`

const Search = styled.input`
  font-family: inherit;
  font-weight: 400;
  line-height: 1.25rem;

  background-color: transparent;
  outline: none;
  border: none;
  width: 85%;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: SearchInputProps) {
  return (
    <>
      <SearchArea>
        <SearchBar>
          <Search {...props} />
          <SearchIcon />
        </SearchBar>
        <FavoritesIcon id="favButton" />
      </SearchArea>
    </>
  )
}
