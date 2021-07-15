import "./App.css";
import React from "react";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      imgURL: "0.png",
    };
  }
  images = ["0.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  counter = 0;
  sliderInterval;
  sliding = false;

  goLeft = () => {
    if (this.counter > 0 && !this.sliding) {
      this.counter--;
      this.setState({ imgURL: this.images[this.counter] });
    }
  };
  goRight = () => {
    if (this.counter < 6 && !this.sliding) {
      this.counter++;
      this.setState({ imgURL: this.images[this.counter] });
    }
  };
  startSlideShow = () => {
      this.sliding = true;
    clearInterval(this.sliderInterval);
    this.sliderInterval = setInterval(() => {
      this.counter++;
      if (this.counter === 7) {
        this.counter = 0;
      }
      this.setState({ imgURL: this.images[this.counter] });
    }, 1000);
  };
  stopSlideShow = () => {
      clearInterval(this.sliderInterval)
      this.sliding = false;
  };

  render() {
    const styles = {
      container: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      },
      slideBox: {
        position: "relative",
        width: "500px",
        height: "450px",
        border: "2px solid grey",
        marginTop: "10px",
        marginRight: "10px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid grey",
        width: "20vw",
        height: "25vh",
        borderRadius: "20px",
        top: "15vh",
        left: "3vw",
      },
      imgStyle: {
        width: "300px",
        height: "300px",
      },
      button: {
        width: "70px",
        height: "40px",
        borderRadius: "10px",
        marginTop: "5px",
        backgroundColor: "lightcoral",
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={this.goLeft}>
            Left
          </button>
          <button style={styles.button} onClick={this.startSlideShow}>
            Start
          </button>
          <button style={styles.button} onClick={this.stopSlideShow}>
            Stop
          </button>
          <button style={styles.button} onClick={this.goRight}>
            Right
          </button>
        </div>
        <div style={styles.slideBox}>
          <img
            style={styles.imgStyle}
            src={this.state.imgURL}
            alt="slider-img"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
