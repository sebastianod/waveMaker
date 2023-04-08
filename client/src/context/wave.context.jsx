import { createContext, useState } from "react";

//Here we store the xml svg data of the wave image
export const WaveContext = createContext({
    svgText: "",
    setSvgText: ()=> {},
    isLoading: null,
    setIsLoading: ()=> {},
})

export const WaveProvider = ({children}) => {
    const [ svgText, setSvgText ] = useState("")
    const [ isLoading, setIsLoading ] = useState(null);

    const providerValue = {
        svgText,
        setSvgText,
        isLoading,
        setIsLoading,
    }

    return (
        <WaveContext.Provider value={providerValue}>
          {children}
        </WaveContext.Provider>
      )
}