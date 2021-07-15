import { Component } from "react";
import "./App.css";
import DisplayList from "./Components/viewList";
import Register from "./Components/resgister";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: "Mahmoud", age: "28", id: 1 },
        { name: "Ali", age: "53", id: 2 },
        { name: "Ibrahim", age: "45", id: 3 },
        { name: "Hania", age: "18", id: 4 },
      ],
    };
  }

  updatePeople = (person) => {
    let myPeople = this.state.people;
    myPeople.push(person);
    this.setState((state) => {
      state.people = myPeople;
      console.log("setState" + person.name);
      return state;
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Register sendData={this.updatePeople} />

          <DisplayList myList={this.state.people} title="test" />
        </div>
      </div>
    );
  }
}

export default App;
