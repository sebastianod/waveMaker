import ColorPicker from "../color-picker/color-picker.component";
import Slider from "../slider/slider.component";
import { useContext, useEffect } from "react";
import { ValuesContext } from "../../context/values.context";

const Features = () => {
  const { values } = useContext(ValuesContext);//values to send to py

  //-------function for sending data to python-------//
  const sendData = async (data) => {
    const response = await fetch('http://127.0.0.1:5000/getwave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //tell flask what type of data is incoming
      },
      body: JSON.stringify(data) //the actual outgoing data in JSON format
    });
    const result = await response.json(); //get the response from flask, A promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number…
    console.log(result); // log response from flask api
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(values); // send the values
    console.log("I got clicked");
  };
  //limits were found for each value. The axes do not scale, thus the values remain truly independent from one another.
  return (
    <div className="features-container">
      <form className="slider-container" onSubmit={handleSubmit}>
        <Slider name="crazyness" min={2} max={10} step={1} />
        <Slider name="height" min={0} max={8} step={1} />
        <Slider name="amplitude" min={0.1} max={0.5} step={0.1} />
        <ColorPicker
          label="Background Color"
          name="backgroundColor"
          defaultColor="#2596be"
        />
        <ColorPicker
          label="Wave Color"
          name="waveColor"
          defaultColor="#145369"
        />
        <button type="submit">Get wave!</button>
      </form>
    </div>
  );
};

export default Features;
