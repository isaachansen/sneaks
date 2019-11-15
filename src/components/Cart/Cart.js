import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import { connect } from "react-redux";
import { getCart } from "../../ducks/reducer";
import StripeCheckout from "react-stripe-checkout";
import "./Cart.scss";

function handleToken(token, addresses) {
  console.log({token, addresses})
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrice: 0
    };
    this.getCustomerCart = this.getCustomerCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount() {
    this.getCustomerCart();
  }

  getCustomerCart = async () => {
    const cart = await axios.get(`/api/cart/${this.props.user.user_id}`);
    this.setState({
      cart: cart.data
    });
    const addNumbers = this.state.cart.map(item => {
      return item.price
    }).reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);
    this.setState({
      totalPrice: addNumbers
    })
  };


  deleteFromCart() {
   const cart = axios.delete(`/api/cart/${this.props.cart.cart_id}`)
    this.setState({
      cart: cart.data
    })
  }



  

  render() {
    const mappedCart = this.state.cart.map((shoe, index) => {
      return (
        <div className="cart-item-container" key={index}>
          <div className="cart-image-container">
            <img className="cart-image" src={shoe.image} alt="shoes" />
          </div>
          <h2 className="cart-brand ">{shoe.shoe_brand}</h2>
          <h3 className="cart-name">{shoe.shoe_name}</h3>
          <h2 className="cart-price">${shoe.price}</h2>
          <div>
              <button onClick={() => this.deleteFromCart()}>X</button>
          </div>
        </div>
      );
    });

    return (
      <div className="absolute-cart">
        <Header2 />
        <div className="background-cart">
          <div className="cart-text-box">
            <div className="cart-text"></div>
          </div>
          <div className="cart-box-background">
            <div className="cart-box">
            {mappedCart}
            </div>
          </div>
            <div className="cart-info">
              {/* <button className="check-out-btn">CHECKOUT</button> */}
              <StripeCheckout 
              stripeKey="pk_test_0Tq8vbXjxqTXMw2SpLjTizYI00ro0ak9v1"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={this.state.totalPrice * 100}
              />
              <h2 className="total-price">Total: ${this.state.totalPrice}</h2>
            </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCart })(Cart);
