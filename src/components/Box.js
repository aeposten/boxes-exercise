function Box({on}) {
    let styles = {
        backgroundColor: on ? "salmon" : "seagreen"
    }
    return(
        <div className="box" style={styles}></div>
    )
}
export default Box;