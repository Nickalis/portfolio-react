import React from 'react';
import './greeting.css'

function Gretting() {
    return (
        <div className="main-container">
            <div className='greting-wapper'>
                <h1>Hi, I'm Nickalis Salmons.</h1>
            </div>
            <div className="into-wrapper">
                <div className="nav-wrapper">
                    <ul>
                        <div id="dot-1" class="browser-dot"></div>
                        <div id="dot-2" class="browser-dot"></div>
                        <div id="dot-3" class="browser-dot"></div>
                    </ul>
                    <ul id="navigation">

                    </ul>
                </div>
            <div className="left-colum">
                <h1>About Me</h1>
            </div>
            </div>
        </div>
    );
}

export default Gretting;