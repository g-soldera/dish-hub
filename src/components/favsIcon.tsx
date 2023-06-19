import React, { useEffect, useState } from "react"
import styled from "styled-components"

const FavIconContainer = styled.div`
  svg {
    stroke: var(--primary-text);
    fill: none;
  }
`

const ActiveFavIconContainer = styled(FavIconContainer)<{ isActive: boolean }>`
  svg {
    stroke: ${(props) =>
      props.isActive ? "var(--main-color)" : "var(--primary-text)"};
    fill: ${(props) => (props.isActive ? "var(--main-color)" : "none")};
  }
`

export function FavoritesIcon({
  id,
  onClick,
}: {
  id: string
  onClick?: () => void
}) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem(id)
    if (storedValue) {
      setIsActive(storedValue === "true")
    }
  }, [id])

  const handleIconClick = () => {
    setIsActive(!isActive)
    localStorage.setItem(id, String(!isActive))
    {
      onClick ? onClick() : undefined
    }
  }

  return (
    <FavIconContainer>
      <ActiveFavIconContainer isActive={isActive} onClick={handleIconClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
            fill="path"
            stroke="path"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      </ActiveFavIconContainer>
    </FavIconContainer>
  )
}
