import React from 'react';
import contBodyYogurt from '../images/yogurt.jpg';


export class BodyContent extends React.Component {
    render() {
        return (
            <div className='body'>
                <div>
                    <div>
                        <h1>NEW PRODUCT</h1>
                        <h2>The Twist of Healthy Yogurt</h2>
                        <p>This website template has been designed by
                            <a href="https://freewebsitetemplates.com/">Free Website Templates</a>
                            for you, for free. You can replace all this text with your own text
                        </p>
                    </div>
                    <img src={contBodyYogurt} alt="" />
                </div>
            </div >
        )
    }
};