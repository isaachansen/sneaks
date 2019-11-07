import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import "./Store.scss";

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getAllInventory = this.getAllInventory.bind(this);
  }

  componentDidMount() {
    this.getAllInventory();
  }

  getAllInventory() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    const { inventory } = this.state;
    const mappedInventory = inventory.map(shoe => {
      return (
        <div className="item-container" key={shoe.shoe_id}>
          <div className="image-container">
            <img className="image" src={shoe.image} alt="shoes" />
          </div>
          <h2 className="brand ">{shoe.shoe_brand}</h2>
          <h3 className="name">{shoe.shoe_name}</h3>
          <h2 className="price">${shoe.price}</h2>
          <button className="cart-btn">ADD TO CART</button>
        </div>
      );
    });
    console.log(this.state.inventory);
    return (
      <div className="store-background">
        <Header2 />
        <div className="grid items">{mappedInventory}</div>
      </div>
    );
  }
}
