import { useContext, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import Image from "next/image"
import { FavoritesIcon } from "./favsIcon"
import { FetchContext } from "@/contexts/fetchContext"
import { FilterType } from "@/types/filterTypes"

const CardsContainer = styled.div`
  height: fit-content;
  display: flex;
  gap: 1rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
`

const shimmerAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`

const Card = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 14vw;
  height: 17vw;
  background-color: var(--secondary-bg);
  border-radius: var(--border-radius);
  flex-shrink: 0;
  position: relative;
  z-index: 0;

  &:hover {
    border-bottom: 1px solid var(--main-color);
    transform: scale(1.05);
  }

  .fav {
    position: absolute;
    top: 1rem;
    right: 1.66rem;

    svg {
      cursor: pointer;
      width: 1.7rem;
    }

    svg:hover {
      stroke: var(--main-color);
      fill: var(--main-color);
      transform: scale(1.05);
    }
  }

  .image {
    color: transparent;
    position: relative;
    overflow: hidden;
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 3px solid var(--primary-bg);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        -90deg,
        var(--primary-bg) 0%,
        var(--secondary-bg) 50%,
        var(--primary-bg) 100%
      );
      background-size: 200% 100%;
      animation: ${shimmerAnimation} 1.5s linear infinite;
      border-radius: 50%;
    }

    .image[data-loaded="false"] {
      text-indent: -9999px;
    }
  }

  .image:hover {
    border: 3px solid var(--main-color);
    transform: scale(1.08);
  }

  h2 {
    font-size: 0.88rem;
    text-align: center;
  }

  .footer {
    width: 100%;
    justify-content: space-between;
    display: flex;
    font-size: 0.7rem;
  }
`

export interface Recipe {
  id: number
  image: string
  title: string
  readyInMinutes: number
  servings: number
}

interface RecipesContainerProps {}
export function RecipesContainer(props: RecipesContainerProps) {
  const { recipes, fetchRecipes } = useContext(FetchContext)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    fetchRecipes(FilterType.ALL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardsContainer>
      {recipes.map((recipe: Recipe) => (
        <Card key={recipe.id}>
          <div className="fav">
            <FavoritesIcon id={`${recipe.id}`} onClick={handleClick} />
          </div>
          <Image
            className="image"
            src={recipe.image}
            alt={recipe.title}
            width={300}
            height={300}
          />
          <h2>{recipe.title}</h2>
          <div className="footer">
            <p>{recipe.readyInMinutes}min</p>
            <p>{recipe.servings} pieces</p>
          </div>
        </Card>
      ))}
    </CardsContainer>
  )
}
