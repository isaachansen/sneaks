import React, {Component} from 'react';
import axios from 'axios';

export default class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    getItem(id) {
        axios.get(`/api/item/${id}`).then(res => {
            this.setState({
                item: res.data
            })
        })
    }

    render() { 
        const { item } = this.state;
        const mappedItem = item.map(item => {
            return (
                <div>
                    lameo
                </div>
            )
        })
        return(
            <div>
                {mappedItem}
            </div>
        ) 
    }
}
