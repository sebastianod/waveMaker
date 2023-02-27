import { useState } from "react";
import "./slider.styles.scss";
import { useContext } from "react";
import { ValuesContext } from "../../context/values.context";

const Slider = (props) => {
  const { min, max, step, name } = props;
  const [value, setValue] = useState(0); //current slider value

  const { values, setValues } = useContext(ValuesContext); //contains each of the values, height, amplitude and crazyness. To be used in each slider so as to change its own value found here.

  const handleChange = (event) => {
    const { name, value } = event.target; //gather name of the slider and its current value
    setValue(value); //set its own value
    setValues({...values, [name]: value }); //set its specific value inside the global values object (h, a, crazyns)
  };

  console.log(values);

  return (
    <div className="slider-container">
      <label className="label">{name}</label>
      <input
        type="range"
        className="slider"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        id={name}
      ></input>
    </div>
  );
};

export default Slider;
