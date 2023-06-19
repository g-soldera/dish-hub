import React, { createContext, useState } from "react"
import { Recipe } from "@/components/recipesContainer"
import { FilterType } from "@/types/filterTypes"
import axios from "axios"

export const FetchContext = createContext<{
  recipes: Recipe[]
  fetchRecipes: (value: FilterType) => void
}>({
  recipes: [],
  fetchRecipes: () => {},
})

interface RecipeProviderProps {
  children: React.ReactNode
}

export function FetchProvider({ children }: RecipeProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const fetchRecipes = async (type: FilterType = FilterType.ALL) => {
    try {
      const response = await fetchData(type ? type : FilterType.ALL)
      setRecipes(response)
    } catch (error) {
      console.error("API Error:", error)
      throw new Error("Failed to fetch data from API.")
    }
  }

  return (
    <FetchContext.Provider value={{ recipes, fetchRecipes }}>
      {children}
    </FetchContext.Provider>
  )
}

const fetchData = async (type?: FilterType) => {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/random?number=10&type=" + type,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "fc34dec70e474a8b882fdd774aa13415",
        },
      }
    )

    const recipes = response.data.recipes.map((recipe: Recipe) => ({
      id: recipe.id,
      image: recipe.image,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
    }))

    return recipes
  } catch (error) {
    console.error("API Error:", error)
    throw new Error("Failed to fetch data from API.")
  }
}
