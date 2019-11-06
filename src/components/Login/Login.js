import React, {Component} from 'react';
import Header2 from '../Header2/Header2';

export default class Login extends Component {
    render() {
        return(
            <div>
                <Header2 />
                <div>
                    <div>
                        <label>Username</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input></input>
                    </div>     
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}