import { render } from '@testing-library/react';
import React, {Component} from 'react';
import letter from "./img/letter.png"

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
        const offset = this.props.isFirst ? "offset-lg-2" : "";
        const hover = this.state.hover ? "btn-outline-primary" : "btn-primary";
        const height = this.state.hover ? "w-img mt-1" : "h-0";

        let imgSrc = 0;
        if (this.props.isFirst) {
            imgSrc = letter;
        } else {
            imgSrc = "https://via.placeholder.com/250";
        }
        
        return (
            <div className={"col-md-3 col-lg-2" + " " + offset}>
                <button type='button' className={"btn btn-lg" + " " + hover} onMouseOver={()=>this.hoverHandler()} onMouseLeave={()=>this.leaveHandler()}>{this.props.name}</button>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <img src={imgSrc} className={height} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Btns
