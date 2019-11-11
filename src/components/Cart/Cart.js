import React, {Component} from 'react';
import Header2 from '../Header2/Header2';
import './Cart.scss';

export default class Cart extends Component {
    render() {
        return(
            <div className="absolute-cart">
                <Header2 />
                <div className="background-cart">
                    <div>
                        <div>
                            CART
                        </div>
                    </div>
                    <div className="cart-box"></div>
                </div>
            </div>
        )
    }
}