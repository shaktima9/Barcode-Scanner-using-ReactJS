import React, { Component } from "react";
import ReactDOM from "react-dom";
import Scanner from "./Scanner";
import Result from "./Result";

class App extends Component {
  state = {
    scanning: false,
    results: []
  };

  _scan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  _onDetected = (result) => {
    this.setState({ results: this.state.results.concat([result]) });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          //justifyContent: "center",
         // alignItems: "center",
          backgroundColor: "#BEBEBE"
        }}
      >
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

          }}
         >*/}
        <ul className="results">
          {this.state.scanning === true ? (
            this.state.results.map((result, i) => (
              <Result key={result.codeResult.code + i} result={result} />
            ))
          ) : (
            <></>
          )}
        </ul>
        <button
          onClick={this._scan}
          style={{
            backgroundColor: "#33CCFF",
            color: "white",
            width: "100px",
            height: "40px",
            borderRadius: "5px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          {this.state.scanning ? "Stop" : "Start"}
        </button>

        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
