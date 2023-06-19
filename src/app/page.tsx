"use client"

import { FilterBar } from "@/components/filterBar"
import { Footer } from "@/components/footer"
import { RecipesContainer } from "@/components/recipesContainer"
import { FetchProvider } from "@/contexts/fetchContext"
import { ReloadProvider } from "@/contexts/refreshContext"
import styled from "styled-components"

const Main = styled.main`
  height: 100%;
  width: 100%;
  padding: 1rem 10rem;
`

export default function Home() {
  return (
    <>
      <Main>
        <FetchProvider>
          <ReloadProvider>
            <FilterBar />
            <RecipesContainer />
          </ReloadProvider>
        </FetchProvider>
      </Main>
      <Footer />
    </>
  )
}
