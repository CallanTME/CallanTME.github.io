import React from "react";
import { Intro } from "./assets/Intro";
import { Projects } from "./assets/Projects";
import { Experience } from "./assets/Experience";
import { Skills } from "./assets/Skills";

class MenuBar extends React.Component {
  state = {
    currentOption: "Intro",
  };

  handleClick = (option) => {
    this.setState({ currentOption: option });
    console.log(this.state.currentOption);
  };
  menuOptions = ["Introduction", "Projects", "Experience", "Skills"];
  menuOptionsFormatted = this.menuOptions.map((option) => (
    <button key={option} onClick={() => this.handleClick(option)}>
      {option}
    </button>
  ));

  render() {
    let text;
    if (this.state.currentOption === "Introduction") {
      text = <Intro />;
    } else if (this.state.currentOption === "Projects") {
      text = <Projects />;
    } else if (this.state.currentOption === "Experience") {
      text = <Experience />;
    } else {
      text = <Skills />;
    }
    return (
      <div className={"menu-bar"}>
        {this.menuOptionsFormatted}
        {text}
      </div>
    );
  }
}

export default MenuBar;
