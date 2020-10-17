import React, { Component } from "react";
import ListItem from "./ListItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"],
    };
  }

  moveCard = (dragIndex, hoverIndex) => {
    // const dragCard = cards[dragIndex];
    console.log({ dragIndex, hoverIndex });
    // setCards(update(cards, {
    //   $splice: [
    //     [dragIndex, 1],
    //     [hoverIndex, 0, dragCard],
    //   ],
    // }));
  };

  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          {this.state.list.map((listItem) => (
            <ListItem text={listItem} moveCard={this.moveCard} />
          ))}
        </DndProvider>
      </div>
    );
  }
}

export default App;
