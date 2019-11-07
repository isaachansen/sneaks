import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Store.scss";

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      isLoading: true
    };
    this.getAllInventory = this.getAllInventory.bind(this);
  }

  componentDidMount() {
    this.getAllInventory();
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
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
        {
          this.state.isLoading ? 
          (<div className="load-box">
              <div className="load">
                <Loader className="loader" type="Rings" color="black" height={100} width={100}/>
              </div>
            </div>) 
            : 
            (<div className="grid items">{mappedInventory}</div>)
        }
        {/* <div className="grid items">{mappedInventory}</div> */}
      </div>
    );
  }
}
