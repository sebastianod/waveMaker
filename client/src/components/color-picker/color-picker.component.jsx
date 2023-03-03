import { useContext, useState } from "react";
import { ValuesContext } from "../../context/values.context";

const ColorPicker = (props) => {
  //either background or wave color
  const { name, label, defaultColor } = props; //passed down by features
  const { values, setValues } = useContext(ValuesContext);

  const handleChange = (event) => {
    //give its value to the input and to the global set of values
    const { name, value } = event.target;
    setValues({ ...values, [name]: value }); //set the value in global values
  };

  return (
    <div>
      <label className="label">{label}</label>
      <input
        type="color"
        id={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
