import "./features.styles.scss";
import ColorPicker from "../color-picker/color-picker.component";
import Slider from "../slider/slider.component";
import Output from "../output/output.component";
import { useContext } from "react";
import { ValuesContext } from "../../context/values.context";
import { WaveContext } from "../../context/wave.context";

const Features = () => {
  const { values } = useContext(ValuesContext); //values to send to py
  const { svgText, setSvgText } = useContext(WaveContext); //our wave

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
    setSvgText(decoded_svg); // type: string. Set the binary data as the SVG source
    // console.log(typeof(decoded_svg))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(values); // send the values
  };

  //limits were found for each value. The axes do not scale, thus the values remain truly independent from one another.
  return (
    <div className="features-container">
      <div className="header-container">
        <header className="header">Make your own waves! 🌊</header>{" "}
      </div>
      <div className="values-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="value">
            <Slider name="crazyness" label="Crazyness" min={2} max={17} step={1} />
          </div>

          <div className="value">
            <Slider name="height" label="Height" min={0} max={8} step={1} />
          </div>

          <div className="value">
            <Slider name="amplitude" label="Amplitude" min={0.1} max={1.5} step={0.1} />
          </div>

          <div className="value">
            <ColorPicker label="Background Color" name="backgroundColor" />
          </div>

          <div className="value">
            {" "}
            <ColorPicker label="Wave Color" name="waveColor" />
          </div>

          <div className="value">
            <button className="button" type="submit">
              Get wave!
            </button>
            <div className="download-container">
              <a
                href={
                  !svgText
                    ? process.env.PUBLIC_URL + "/default.svg"
                    : `data:image/svg+xml;base64,${btoa(svgText)}`
                }
                className="download-text"
                download
              >
                Download SVG
              </a>
            </div>
          </div>
        </form>
      </div>

      <Output svgText={svgText} />
    </div>
  );
};

export default Features;
