import { createContext, useState } from "react";

//the object itself to receive
export const ValuesContext = createContext({
  values: {},
  setValues: () => {},
});

const defaultValues = {
  height: 0,
  amplitude: 0.2,
  crazyness: 3,
  backgroundColor: "#2596be",
  waveColor: "#145369",
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
