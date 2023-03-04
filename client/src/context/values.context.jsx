import { createContext, useState } from "react";

//the object itself to receive
export const ValuesContext = createContext({
  values: {},
  setValues: () => {},
});

const defaultValues = {
  height: 4,
  amplitude: 0.3,
  crazyness: 6,
  backgroundColor: "#1234BA",
  waveColor: "#FFF700",
};

export const ValuesProvider = ({ children }) => {
  const [values, setValues] = useState(defaultValues);

  const providerValue = {
    values,
    setValues,
  };

  return (
    <ValuesContext.Provider value={providerValue}>
      {children}
    </ValuesContext.Provider>
  );
};
