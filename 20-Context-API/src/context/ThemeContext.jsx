import React from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  return (
    <div>
      <ThemeContext.Provider value = 'Sumit Kumar, data coming from context API' >
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

// export default themeContext

// export const ThemeContextProvider = themeContext

export default ThemeContext
export { ThemeContextProvider }