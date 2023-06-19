import styled from "styled-components"
import { ArrowIcon } from "./arrowIcon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { ListType } from "@/types/filterListTypes"

interface FilterListProps {}

const FilterListContainer = styled.div`
  position: relative;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--secondary-text);

  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--secondary-bg);
  padding: 0.5rem 1rem;
  animation: 0;

  &:hover {
    cursor: pointer;
  }

  p {
    font-family: inherit;
  }

  p:hover {
    text-decoration: underline var(--main-color);
  }

  svg {
    position: absolute;
    right: 0.5rem;
  }

  svg:hover {
    animation: 0;
  }
`

const FilterListDropdown = styled.ul`
  z-index: 1;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--terciary-bg);
  padding: 0.7rem 1.2rem;
  position: absolute;
  top: 2.7rem;
  left: 0;
  list-style: none;
  animation: all 0.5s ease;

  li:hover {
    text-decoration: underline var(--main-color);
  }
`

export function FilterList(props: FilterListProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { setListType } = useFilter()

  const handleOpen = () => setIsOpen((prev) => !prev)

  const handleUpdateList = (value: ListType) => setListType(value)

  return (
    <FilterListContainer onClick={handleOpen}>
      <p>Filter by</p> <ArrowIcon />
      {isOpen && (
        <FilterListDropdown>
          <li onClick={() => handleUpdateList(ListType.HEALTHSCORE)}>Health</li>
          <li onClick={() => handleUpdateList(ListType.INGREDIENTS)}>
            Ingredients
          </li>
          <li onClick={() => handleUpdateList(ListType.PREPARETIME)}>
            Prepare Time
          </li>
          <li onClick={() => handleUpdateList(ListType.COST)}>Cost</li>
        </FilterListDropdown>
      )}
    </FilterListContainer>
  )
}
