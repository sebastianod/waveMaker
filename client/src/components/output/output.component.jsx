import React, { useContext } from "react";
import { WaveContext } from "../../context/wave.context";
import "./output.styles.scss";

const Output = (props) => {
  const { svgText } = props;
  const { isLoading } = useContext(WaveContext);

  return (
    <div className="output-container">
      {isLoading && <p>Loading...</p>}
      {!svgText && (
        <img
          src={process.env.PUBLIC_URL + "/default.svg"}
          className="image"
          alt="wave"
        />
      )}
      {svgText && (
        <img
          src={`data:image/svg+xml;base64,${btoa(svgText)}`}
          className="image"
          alt="Wave"
        />
      )}
    </div>
  );
};

export default Output;