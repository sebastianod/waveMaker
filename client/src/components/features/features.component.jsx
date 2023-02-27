import Slider from "../slider/slider.component";
const Features = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    };
    //limits were found for each value. The axes do not scale, thus the values remain truly independent from one another.
  return (
    <div className="features-container">
      <form className="slider-container" onSubmit={handleSubmit}>
        <Slider name="crazyness" min={2} max={10} step={1}/>
        <Slider name="height" min={0} max={8} step={1}/>
        <Slider name="amplitude" min={0.1} max={0.5} step={0.1}/>
        <button type="button">Get wave!</button>
      </form>
    </div>
  );
};

export default Features;
