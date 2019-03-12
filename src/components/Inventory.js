import React, { Component } from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addFish: PropTypes.func,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };
  render() {
    return <Login />;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
