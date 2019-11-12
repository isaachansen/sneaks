import React, {Component} from 'react';
import Header2 from '../Header2/Header2';
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

class Profile extends Component {
    render() {
        return (
            <div>
                <Header2 />
                <div>
                 {this.props.user.username}
                </div>
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState) {
    return reduxState;
  }
  
  const mapDispatchToProps = {
    setUser
  };
  
  export default connect(
    mapReduxStateToProps,
    mapDispatchToProps
  )(Profile);