import { useState } from "react";

function Box({ on }) {
const [isOn, setIsOn] = useState(on);

let styles = {
    backgroundColor: isOn ? "salmon" : "seagreen",
  };


  function toggleOn() {
    setIsOn(prevState => !prevState)
    console.log("toggle")
  }

  return <div className="box" style={styles} onClick={toggleOn}></div>;
}
export default Box;
