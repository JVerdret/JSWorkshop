import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};


class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1"
  };
  }  

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  handleClick(id) {
    // new  cells 
    const newCells = [...this.state.cells];
    if (newCells[id] === null) {
      newCells[id] = this.state.currentPlayer === "player 1" ? "X" : "O";
      this.setState({
        currentPlayer: this.state.currentPlayer === 'player 1' ? 'player 2' : 'player 1',
        cells: newCells,
      })
    }
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} /*currentPlayer={this.state.currentPlayer} */onClickCell={(id) => this.handleClick(id)} />
      </div>
    );
  }
}

export default GameLayout;
