import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal'; // REACT REVEAL
import 'animate.css/animate.css'; //  REACT REVEAL

const generateBlocks = ({blocks}) => {

    // check if we have data 
    if (blocks) {
        return blocks.map((item) => {
            return (
                <Reveal key={item.id}>
                    <div effect="animated fadeInUp" className={`item ${item.type}`}>
                        <div className="veil"></div>
                        <div className="image"  style={{background: `url(/images/blocks/${item.image}) no-repeat`}}></div>
                        <div className="title">
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </div>
                </Reveal>
            )
        })
    }
}

const Blocks = (props) => {
    return (
        <div className="home_blocks">
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;