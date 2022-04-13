import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Btns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    hoverHandler(event) {
        this.setState({
            hover: true
        });
    }

    leaveHandler(event) {
        this.setState({
            hover: false
        });
    }

    render() {
        const first = this.props.isFirst ? "offset-lg-2" : "";
        const hover = this.state.hover ? "btn-outline-primary" : "btn-primary";
        const height = this.state.hover ? "img-fluid mt-1" : "h-0";
        
        return (
            <div className={"col-md-3 col-lg-2" + " " + first}>
                <button type='button' className={"btn btn-lg" + " " + hover} onMouseOver={()=>this.hoverHandler()} onMouseLeave={()=>this.leaveHandler()}>{this.props.name}</button>
                <img src='https://via.placeholder.com/250' className={height} />
            </div>
        )
    }
}

export default Btns
