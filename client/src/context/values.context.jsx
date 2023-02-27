import { createContext, useState } from "react";

//the object itself to receive
export const ValuesContext = createContext({
  values: {},
  setValues: () => {},
});

const defaultValues = {
  height: null,
  amplitude: null,
  crazyness: null,
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
