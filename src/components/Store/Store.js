import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addToCart } from "../../ducks/reducer";
// import { TiHeartOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Store.scss";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      isLoading: true,
      toggle: false
    };
    this.getAllInventory = this.getAllInventory.bind(this);
    this.getNike = this.getNike.bind(this);
    this.getVans = this.getVans.bind(this);
    this.getConverse = this.getConverse.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
    this.getOther = this.getOther.bind(this);
    this.getAirJordan = this.getAirJordan.bind(this);
    this.toggler = this.toggler.bind(this);
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

  getNike() {
    axios.get("/api/nike").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getVans() {
    axios.get("/api/vans").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getConverse() {
    axios.get("/api/converse").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getAdidas() {
    axios.get("/api/adidas").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getAirJordan() {
    axios.get("/api/air_jordan").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getOther() {
    axios.get("/api/other").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  buttonAddToCart = async (user_id, shoe_id) => {
    let cart = await axios.post("/api/add_to_cart", { user_id, shoe_id });
    this.props.addToCart(cart.data);
  };

  getCart() {
    axios.get("/api/cart").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  toggler() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    toast.configure();
    const notify = () =>
      toast.success("Added to cart!", {
        autoClose: 2000
      });
    const { inventory } = this.state;
    const mappedInventory = inventory.map(shoe => {
      return (
        <div className="item-container" key={shoe.shoe_id}>
          <div className="image-container">
            {/* <TiHeartOutline className="heart"/> */}
            <div
              onClick={() => this.toggler}
              className={this.state.toggle ? "heart-filled" : "heart"}
            ></div>
            <img className="image" src={shoe.image} alt="shoes" />
          </div>
          <h2 className="brand ">{shoe.shoe_brand}</h2>
          <h3 className="name">{shoe.shoe_name}</h3>
          <h2 className="price">${shoe.price}</h2>
          <button
            name={shoe.shoe_id}
            className="cart-btn"
            onClick={e => {
              notify();
              this.buttonAddToCart(
                this.props.user.user_id,
                Number(e.target.name)
              );
            }}
          >
            ADD TO CART
          </button>
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
              <div className="store-title">STORE</div>
              <div className="filter-box">
                <div className="filter-text">FILTER</div>
                <div className="name-container">
                  <button
                    onClick={() => this.getAllInventory()}
                    className="shoe-button"
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => this.getAdidas()}
                    className="shoe-button"
                  >
                    ADIDAS
                  </button>
                  <button
                    onClick={() => this.getAirJordan()}
                    className="shoe-button"
                  >
                    AIR JORDAN
                  </button>
                  <button
                    onClick={() => this.getConverse()}
                    className="shoe-button"
                  >
                    CONVERSE
                  </button>
                  <button
                    onClick={() => this.getNike()}
                    className="shoe-button"
                  >
                    NIKE
                  </button>
                  <button
                    onClick={() => this.getVans()}
                    className="shoe-button"
                  >
                    VANS
                  </button>
                  <button
                    onClick={() => this.getOther()}
                    className="shoe-button"
                  >
                    OTHER
                  </button>
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

export default connect(mapStateToProps, { addToCart })(Store);
