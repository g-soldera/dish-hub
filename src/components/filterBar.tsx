import React, { useState, useContext } from "react"
import styled, { keyframes, css } from "styled-components"
import { FilterByCategory } from "./filterByCategory"
import { FilterList } from "./filterList"
import { useFilter } from "@/hooks/useFilter"
import { FetchContext } from "@/contexts/fetchContext"

const FilterBarContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`

const RightFilters = styled.div`
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  display: flex;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke: var(--primary-text);
  }

  svg:hover {
    stroke: var(--main-color);
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const RefreshIcon = styled.svg<{ isRotating?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  stroke: ${(props) =>
    props.isRotating ? "var(--main-color)" : "var(--primary-text)"};

  &:hover {
    stroke: var(--main-color);
  }

  ${(props) =>
    props.isRotating &&
    css`
      stroke: var(--main-color);
      animation: ${rotateAnimation} 0.7s linear 2;
    `}
`

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps) {
  const [isRotating, setIsRotating] = useState(false)
  const { type } = useFilter()
  const { fetchRecipes } = useContext(FetchContext)

  const handleRefreshClick = () => {
    if (!isRotating) {
      setIsRotating(true)
      fetchRecipes(type)

      setTimeout(() => {
        setIsRotating(false)
      }, 1400)
    }
  }

  return (
    <FilterBarContainer>
      <FilterByCategory />
      <RightFilters>
        <FilterList />
        <RefreshIcon
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="path"
          onClick={handleRefreshClick}
          isRotating={isRotating}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z"
          />
        </RefreshIcon>
      </RightFilters>
    </FilterBarContainer>
  )
}
