import { Component } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
    this.styles = {
      custom: {
        flex: "auto",
        display: "block",
      },
    };
    this.counter = 4;
    this.isOpen = false;
  }

  updateName = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state.name + " name");
  };
  updateAge = (e) => {
    this.setState({ age: e.target.value });
    console.log(this.state.age + " age");
  };
  submitInfo = () => {
    this.counter++;
    let person = {
      name: this.state.name,
      age: this.state.age,
      id: this.counter,
    };
    this.props.sendData(person);
    this.setState({ isOpen: false });
  };
  showModal = () => {
    this.setState({ isOpen: true });
    console.log(this.state.isOpen);
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.showModal}>
          ADD PERSON{" "}
        </button>
        <Modal show={this.state.isOpen} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="mb-3">
              <div className="input-group pmd-input-group pmd-input-group-icon mb-3">
                <div
                  className="pmd-textfield pmd-textfield-floating-label"
                  style={this.styles.custom}
                >
                  <label htmlFor="inputError1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={this.state.name}
                    onChange={this.updateName}
                  />
                  <span className="pmd-textfield-focused"></span>
                </div>
              </div>

              <div className="input-group pmd-input-group pmd-input-group-icon mb-3">
                <div
                  className="pmd-textfield pmd-textfield-floating-label"
                  style={this.styles.custom}
                >
                  <label htmlFor="inputError1">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={this.state.age}
                    onChange={this.updateAge}
                  />
                  <span className="pmd-textfield-focused"></span>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.hideModal}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={this.submitInfo}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Register;
