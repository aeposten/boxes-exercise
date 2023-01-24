

function Box({toggleOn, on}) {
    let styles = {
        backgroundColor: on ? "salmon" : "seagreen",
      };
    


  return <div className="box" style={styles} onClick={toggleOn}></div>;
}
export default Box;
