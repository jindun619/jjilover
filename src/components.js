import { render } from '@testing-library/react';
import React, {Component} from 'react';
import letter from "./img/letter.png"
import { Carousel } from "react-bootstrap"

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

function Card() {
    return (
        <div className='card col-lg-4 col-md-6 col-sm-12 card-item'>
            <h3 className='card-header'>card header</h3>
            <div className='card-body'>
                <h5 className='title'>title</h5>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            {/* <div className='card-img text-center'>
                <img src='https://via.placeholder.com/250x150' className='h-img' />
            </div> */}
            <Carousel variant='dark' interval={null}>
                <Carousel.Item className='card-img text-center'>
                    <img src="https://via.placeholder.com/100" className='h-img' />
                </Carousel.Item>
                <Carousel.Item className='card-img text-center'>
                    <img src="https://via.placeholder.com/200" className='h-img' />
                </Carousel.Item>
                <Carousel.Item className='card-img text-center'>
                    <img src="https://via.placeholder.com/300" className='h-img' />
                </Carousel.Item>
            </Carousel>
            <div className='card-body'>
                <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
            </div>
        </div>
    )
}

export {Btns as default, Card}
