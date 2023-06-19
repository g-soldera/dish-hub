"use client"

import { FetchContext } from "@/contexts/fetchContext"
import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filterTypes"
import { useContext, useState } from "react"
import styled from "styled-components"

const FilterByCategoryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
  margin-bottom: 1rem;
`

const FilterByCategoryItem = styled.li<FilterItemProps>`
  position: relative;
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "500" : "300")};

  &::before {
    content: "";
    position: absolute;
    background-color: var(--main-color);
    bottom: -0.6rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    visibility: ${(props) => (props.selected ? "visible" : "hidden")};
  }

  &:hover {
    cursor: pointer;

    &::before {
      visibility: visible;
    }
  }
`

interface FilterItemProps {
  selected: boolean
}

interface FilterByCategoryProps {}

export function FilterByCategory(props: FilterByCategoryProps) {
  const { type, setType } = useFilter()
  const { fetchRecipes } = useContext(FetchContext)

  const handleChangeType = (value: FilterType) => {
    setType(value)
    fetchRecipes(value)
  }


  return (
    <div>
      <FilterByCategoryList>
        <FilterByCategoryItem
          selected={type === FilterType.ALL}
          onClick={() => handleChangeType(FilterType.ALL)}
        >
          Popular
        </FilterByCategoryItem>
        <FilterByCategoryItem
          selected={type === FilterType.VEGETARIAN}
          onClick={() => handleChangeType(FilterType.VEGETARIAN)}
        >
          Vegetarian
        </FilterByCategoryItem>
        <FilterByCategoryItem
          selected={type === FilterType.VEGAN}
          onClick={() => handleChangeType(FilterType.VEGAN)}
        >
          Vegan
        </FilterByCategoryItem>
        <FilterByCategoryItem
          selected={type === FilterType.DESSERTS}
          onClick={() => handleChangeType(FilterType.DESSERTS)}
        >
          Desserts
        </FilterByCategoryItem>
        <FilterByCategoryItem
          selected={type === FilterType.SIMPLE}
          onClick={() => handleChangeType(FilterType.SIMPLE)}
        >
          Simple
        </FilterByCategoryItem>
      </FilterByCategoryList>
    </div>
  )
}
