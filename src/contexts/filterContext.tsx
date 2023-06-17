"use client"

import { ListType } from "@/types/filterListTypes"
import { FilterType } from "@/types/filterTypes"
import { ReactNode, createContext, useState } from "react"

export const FilterContext = createContext({
  search: "",
  type: FilterType.ALL,
  listType: ListType.RANDOM,
  setSearch: (value: string) => {},
  setType: (value: FilterType) => {},
  setListType: (value: ListType) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("")
  const [type, setType] = useState(FilterType.ALL)
  const [listType, setListType] = useState(ListType.RANDOM)

  return (
    <FilterContext.Provider
      value={{ search, type, listType, setSearch, setType, setListType }}
    >
      {children}
    </FilterContext.Provider>
  )
}
