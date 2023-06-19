import { useState, createContext, useContext } from "react"

const ReloadContext = createContext()

function ReloadProvider({ children }) {
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
