import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme")
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

 
  toggleThemeChange = () => {
    const { checked } = this.state;

    if (checked === false) {
      localStorage.setItem("theme", "dark");
      
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      this.setState({
        
        checked: true
      });
    } else {
      
      localStorage.setItem("theme", "light");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      
      this.setState({

        checked: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Click the switch to toggle themes</p>
          <label class="switch">
            {nput
              type="checkbox"
              // checked={this.state.checked}
              defaultChecked={this.state.checked}
              onChange={() => this.toggleThemeChange()}
            />
            <span class="slider round" />
          </label>
        </header>
      </div>
    );
  }
}

export default App;
