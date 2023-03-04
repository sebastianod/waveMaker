import "./output.styles.scss";

//show default image and then the generated images
const Output = (props) => {
  const { svgText } = props; //destructuring

  //relative path cannot be used outside the src folder, thus:
  //../../public/default.svg, doesn't work
  // {process.env.PUBLIC_URL + "/default.svg"}, works
  return (
    <div className="output-container">
      {!svgText ? (
        <img
          src={process.env.PUBLIC_URL + "/default.svg"}
          className="image"
          alt="wave"
        />
      ) : (
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
