import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer'
import "./Store.scss";

class Store extends Component {
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

  buttonAddToCart = async (user_id, shoe_id) => {
    let cart = await axios.post('/api/add_to_cart', {user_id, shoe_id})
    this.props.addToCart(cart.data)
  }

  getCart() {
    axios.get('/api/cart').then(res => {
      this.setState({
        inventory: res.data
      })
    })
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
          <button name={shoe.shoe_id} className="cart-btn" onClick={(e) => {this.buttonAddToCart(
            this.props.user.user_id,
            Number(e.target.name)
          )}}>ADD TO CART</button>
        </div>
      );
    });
    console.log(this.state.inventory);
    return (
      <div className="store-background">
        <Header2 />
        {this.state.isLoading ? (
          <div className="load-box">
            <div className="load">
              <Loader
                className="loader"
                type="Rings"
                color="black"
                height={100}
                width={100}
              />
            </div>
          </div>
        ) : (
          <div className="store-body">
            <div className="store-filter">
            <div className="store-title">
              STORE
            </div>
            <div className="filter-box">
              <div className="filter-text">FILTER</div>
              <div className="name-container">
              <button className="shoe-button">ALL</button>
              <button className="shoe-button">ADIDAS</button>
              <button className="shoe-button">AIR JORDAN</button>
              <button className="shoe-button">CONVERSE</button>
              <button className="shoe-button">NIKE</button>
              <button className="shoe-button">VANS</button>
              <button className="shoe-button">OTHER</button>
              </div>
            </div>
            </div>

            <div className="grid items">{mappedInventory}</div>
          </div>
          
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addToCart})(Store);