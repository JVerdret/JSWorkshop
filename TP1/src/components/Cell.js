import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyleOver = {
  display: "block",
  backgroundColor: "#adb2ba",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false,
    };
  }
  
  handleMouseOver() {
    this.setState({isMouseOver : true})
  }
  
  handleMouseOut() {
    this.setState({isMouseOver : false})
  }

  render() {
    return (
      <div
        style={this.state.isMouseOver ? cellStyleOver : cellStyle}
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
        onClick={() => this.props.onClick()}
      >
      {this.props.content}
      </div>
    );
  }
}

export default Cell;
