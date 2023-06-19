"use strict"

import { useState, createContext, useContext, ReactNode } from "react"

const ReloadContext = createContext<any>(0)

function ReloadProvider({ children }: { children: ReactNode }) {
  const [reload, setReload] = useState(false)

  const handleReload = () => {
    setReload(true)
  }

  const handleReloadComplete = () => {
    setReload(false)
  }

  const value = {
    reload,
    handleReload,
    handleReloadComplete,
  }

  return (
    <ReloadContext.Provider value={value}>{children}</ReloadContext.Provider>
  )
}

function useReload() {
  return useContext(ReloadContext)
}

export { ReloadProvider, useReload }
