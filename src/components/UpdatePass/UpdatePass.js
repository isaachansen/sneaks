import React, {Component} from 'react';
import Header2 from "../Header2/Header2";

export default class UpdatePass extends Component {
    render() {
        return(
            <div>
                <Header2 />
                <div>
                    <input placeholder="New Password"></input>
                </div>
                <button>UPDATE PASSWORD</button>
            </div>
        )
    }
}