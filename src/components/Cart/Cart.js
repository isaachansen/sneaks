import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getCart } from "../../ducks/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      totalPrice: 0,
      isLoading: true
    };
    this.getCustomerCart = this.getCustomerCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount() {
    this.getCustomerCart();
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
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


  deleteFromCart = async(cart_id) => {
   const cart = await axios.delete(`/api/cart/${cart_id}`)
    this.setState({
      cart: cart.data
    })

  }



  render() {
    const { isLoading } = this.state;
    toast.configure();
    const notify = () =>
      toast.error("Removed from cart!", {
        autoClose: 2000
      });
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
              <button onClick={() => {
                notify();
                this.deleteFromCart(shoe.cart_id)
              }}>X</button>
          </div>
        </div>
      );
    });

    return (
      <div className="absolute-cart">
        <Header2 />
        {isLoading ? (
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
        <div className="background-cart">
          <div className="cart-text-box">
            <div className="cart-text"></div>
          </div>
          <div className="cart-box-background">
            <div className="cart-box">{mappedCart}</div>
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
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCart })(Cart);
