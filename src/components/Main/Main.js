import React from "react";
import './Main.css'
import moon from '../../video/moon.mp4'
const Main = () => (
    <section className="main">
        <h1 className="title">
            Falcon 1
        </h1>
        <div className="video-container">
            <video className="video" autoPlay loop muted src={moon}></video>
        </div>
    </section>
);
export default Main;