import React, { Component } from 'react';
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        "Item1",
        "Item2",
        "Item3",
        "Item4",
        "Item5",
        "Item6",
      ]
    };
  };


  moveCard = (dragIndex, hoverIndex) => {
    // const dragCard = cards[dragIndex];
    console.log({ dragIndex, hoverIndex })
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
        {this.state.list.map(listItem => (
          <ListItem text={listItem} moveCard={this.moveCard} />
        ))}
      </div>
    );
  }
}

export default App; 