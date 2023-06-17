import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  gap: 1rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-shrink: 0;
  width: 14vw;
  height: 17vw;
  background-color: var(--secondary-bg);
  border-radius: var(--border-radius);

  &:hover {
    border-bottom: 1px solid var(--main-color);
  }
`

interface RecipesContainerProps {}
export function RecipesContainer(props: RecipesContainerProps) {
  return (
    <CardsContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsContainer>
  )
}
