import ColorPicker from "../color-picker/color-picker.component";
import Slider from "../slider/slider.component";
import Output from "../output/output.component";
import { useContext, useState } from "react";
import { ValuesContext } from "../../context/values.context";
import { WaveContext } from "../../context/wave.context";

const Features = () => {
  const { values } = useContext(ValuesContext); //values to send to py
  const {svgText, setSvgText} = useContext(WaveContext); //our wave 

  //-------function for sending-receiving data-------//
  const sendData = async (data) => {
    const response = await fetch("http://127.0.0.1:5000/getwave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //tell flask what type of data is incoming
      },
      body: JSON.stringify(data), //the actual outgoing data in JSON format
    });
    const response_data = await response.json(); // obtain the response data. comes in as {svg: encoded_svg}, where encoded_svg is in string, the whole thing is in json.
    const encoded_svg = response_data.svg; // type: string, base64. Destructure the encoded SVG from our response. It's a string that was encoded from base64.
    const decoded_svg = atob(encoded_svg); // type: string, svg-xml. The atob() function decodes a string of data which has been encoded using Base64 encoding.
    setSvgText(decoded_svg); // set the binary data as the SVG source
    // console.log(decoded_svg)
  };

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
     <Output svgText={svgText} />
    </div>
  );
};

export default Features;
