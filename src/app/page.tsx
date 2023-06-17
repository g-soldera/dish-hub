"use client"

import { FilterBar } from "@/components/filterBar"
import { Footer } from "@/components/footer"
import { RecipesContainer } from "@/components/recipesContainer"
import styled from "styled-components"

const Main = styled.main`
  height: 100%;
  width: 100%;
  padding: 1.2rem 10rem;
`

export default function Home() {
  return (
    <>
      <Main>
        <FilterBar />
        <RecipesContainer />
      </Main>
      <Footer />
    </>
  )
}
