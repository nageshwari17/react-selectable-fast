import React, { Component } from 'react'

class Counters extends Component {
  state = {
    selectedItems: [],
    selectingItems: [],
  }

  handleSelecting = selectingItems => {
    if (selectingItems.length !== this.state.selectingItems.length) {
      this.setState({ selectingItems })
    }
  }

  handleSelectionFinish = selectedItems => {
    this.setState({
      selectedItems,
      selectingItems: [],
    })

    // eslint-disable-next-line no-console
    console.log(`Finished selection ${selectedItems.length}`)
  }

  render() {
    const { selectedItems, selectingItems } = this.state

    return (
      <p>
        Selecting: <span className="counter">{selectingItems.length}</span>
        <br />
        Selected: <span className="counter">{selectedItems.length}</span>
        <br />
        <br />
        <button onClick={this.toggleFirstRow}>Toggle first row</button>
      </p>
    )
  }
}

export default Counters
