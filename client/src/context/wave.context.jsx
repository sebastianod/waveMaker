import { createContext, useState } from "react";

//Here we store the xml svg data of the wave image
export const WaveContext = createContext({
    svgText: "",
    setSvgText: ()=> {},
})

export const WaveProvider = ({children}) => {
    const [ svgText, setSvgText ] = useState("")

    const providerValue = {
        svgText,
        setSvgText,
    }

    return (
        <WaveContext.Provider value={providerValue}>
          {children}
        </WaveContext.Provider>
      )
}