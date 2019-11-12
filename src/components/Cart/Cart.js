import React, {Component} from 'react';
import Header2 from '../Header2/Header2';
import axios from 'axios';
import {connect} from 'react-redux';
import { getCart } from '../../ducks/reducer';
import './Cart.scss';

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: []
        }
        this.getCustomerCart = this.getCustomerCart.bind(this);
    }

    componentDidMount() {
        this.getCustomerCart();
    }

    getCustomerCart = async () => {
        const cart = await axios.get(`/api/cart/${this.props.user.user_id}`);
        this.setState({
            cart: cart.data
        })
    }

    render() {
        const mappedCart = this.state.cart.map((shoe, index) => {
            return(
                <div className="item-container" key={index}>
                <div className="image-container">
                  <img className="image" src={shoe.image} alt="shoes" />
                </div>
                <h2 className="brand ">{shoe.shoe_brand}</h2>
                <h3 className="name">{shoe.shoe_name}</h3>
                <h2 className="price">${shoe.price}</h2>
              </div>
            )
        })
        return(
            <div className="absolute-cart">
                <Header2 />
                <div className="background-cart">
                    <div>
                        <div>
                            CART
                        </div>
                    </div>
                    <div className="cart-box">
                    {mappedCart}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {getCart})(Cart)