import React from "react";

export default function Info() {
    return (
        <section className="info">
            <img src={require("./veljko.JPG")} alt="Veljko's picture" id="veljko-pic" />
            <h1>Veljko Jelenković</h1>
            <h5>Frontend developer</h5>
            <h5>Student at Faculty of Engineering Sciences</h5>
            <div className="buttons">
                <a href="mailto:veljkojelenkovic00@gmail.com" target="_blank">Email</a>
                <a href="https://github.com/jelenkoo10" target="_blank">GitHub</a>
            </div>
        </section>
    )
}