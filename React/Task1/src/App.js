import "./App.css";
import React from "react";
import Slider from "./Slider";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viewText: "Hello",
    };
  }

  editText = (evt) => {
    this.setState({ viewText: evt.target.value });
  };
  resetText = () => {
    this.setState({ viewText: "" });
  };

  render() {
    const styles = {
      container: {
        border: "2px solid grey",
        position: "relative",
        left: "20vw",
        width: "60vw",
        height: "90vh",
        borderRadius: "20px",
      },
      textTask: {
        position: "relative",
        textAlign: "center",
        borderRight: "2px solid grey",
        borderLeft: "2px solid grey",
        width: "20vw",
        height: "25vh",
        borderRadius: "20px",
        top: "0",
        left: "30%",
      },
      button: {
        width: "70px",
        height: "40px",
        borderRadius: "10px",
        marginTop: "5px",
        backgroundColor: "lightcoral",
      },
      inputText: {
        width: "70%",
        height: "30px",
      },
      headerText: {
        width: "inherit",
        height: "80px",
        overflowX: "auto",
        overflowY: "hidden",
        display: "block",
      },
      slider: {
        borderTop: "2px solid grey",
        textAlign: "center",
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.textTask}>
          <div style={styles.headerText}>
            <h1>{this.state.viewText}</h1>
          </div>
          <input
            style={styles.inputText}
            type="text"
            value={this.state.viewText}
            onChange={this.editText}
          />
          <br />
          <button style={styles.button} onClick={this.resetText}>
            Reset
          </button>
        </div>
        <div style={styles.slider}>
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
