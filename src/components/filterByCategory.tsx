"use client"

import styled from "styled-components"

const FilterByCategoryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
`

const FilterByCategoryItem = styled.li`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: var(--main-color);
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;

    &::before {
      visibility: visible;
    }
  }
`

interface FilterByCategoryProps {}
export function FilterByCategory(props: FilterByCategoryProps) {
  return (
    <div>
      <FilterByCategoryList>
        <FilterByCategoryItem>Popular Recipes</FilterByCategoryItem>
        <FilterByCategoryItem>Vegetarian</FilterByCategoryItem>
        <FilterByCategoryItem>Desserts</FilterByCategoryItem>
      </FilterByCategoryList>
    </div>
  )
}
