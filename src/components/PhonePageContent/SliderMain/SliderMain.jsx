import React, {Component} from 'react';
import Slider from 'react-slick';

class Slidermain extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            swipe: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            onInit: () => {
                console.log('Inited');
            }
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        );
    }
}

export default Slidermain;