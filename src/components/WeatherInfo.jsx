/* eslint-disable react/no-unescaped-entities */
const WeatherInfo = ({ isSunny }) => {
  return (
    <div style={{ textAlign: "center", margin: "100px", height: "50vh" }}>
      <p style={{background:"#ff5252", color:"#333",padding:"10px",display:"inline-block"}}>JSX Conditional Rendering Using Ternary Operator</p>
      <h2>Today's Weather</h2>
      <p>{isSunny ? "It is sunny today." : "It is not sunny today."}</p>
    </div>
  );
};

export default WeatherInfo;
