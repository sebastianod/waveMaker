import "./slider.styles.scss";
import { useContext} from "react";
import { ValuesContext } from "../../context/values.context";
import { WaveContext } from "../../context/wave.context";
import { sendReceiveData } from "../../api/api"; //to send data as soon as slider is dropped and set the svgTxt received

const Slider = (props) => {
  const { min, max, step, name, label } = props;
  const { values, setValues } = useContext(ValuesContext); //contains each of the values, height, amplitude and crazyness. To be used in each slider so as to change its own value found here.
  //Since we use sendReceiveData, it needs to set the svgText of the image that comes back as soon as slider is dropped.
  const { setSvgText } = useContext(WaveContext); //our wave


  const handleChange = (event) => {
    const { name, value } = event.target; //gather name of the slider and its current value
    setValues({...values, [name]: value }); //set its specific value inside the global values object (h, a, crazyns)
  };

  const handleMouseUp = () => {
    sendReceiveData(values, setSvgText)
  }  
  // Use values[name] and not values.name since the property value is dynamic, we know it only at run time. 

  return (
    <div className="slider-container">
      <label className="slider-label">{label}</label>
      <input
        type="range"
        className="slider"
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        min={min}
        max={max}
        step={step}
        value={values[name]}
        name={name}
        id={name}
      ></input>
    </div>
  );
};

export default Slider;
