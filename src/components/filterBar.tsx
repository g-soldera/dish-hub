"use client"

import styled from "styled-components"
import { FilterByCategory } from "./filterByCategory"
import { RefreshIcon } from "./refreshIcon"

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
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

interface FilterBarProps {}
export function FilterBar(props: FilterBarProps) {
  return (
    <FilterBarContainer>
      <FilterByCategory />
      {/* <FilterByType /> */}
      <RightFilters>
        <span>Filtrar por </span>
        <RefreshIcon />
      </RightFilters>
    </FilterBarContainer>
  )
}
