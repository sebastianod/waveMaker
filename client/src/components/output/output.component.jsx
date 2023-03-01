import "./output.styles.scss";

//We take the decoded (from base64 string) svgText and show it
const Output = (props) => {
    const { svgText } = props; //destructuring
  return (
    <div className="output-container">
      <img
        src={`data:image/svg+xml;base64,${btoa(svgText)}`}
        className="image"
        alt="Wave"
      />
    </div>
  );
};

export default Output;
