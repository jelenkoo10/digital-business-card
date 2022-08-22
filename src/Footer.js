import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <img src={require("./Icons/twitter.png")} alt="Twitter icon" title="Yet to create an account"/>
            <a href="https://www.instagram.com/veljko_jelenkovic/" target="_blank"><img src={require("./Icons/instagram.png")}  alt="Instagram icon" /></a>
            <a href="https://www.facebook.com/veljko.jelenkovic.1" target="_blank"><img src={require("./Icons/facebook.png")}  alt="Facebook icon" /></a>
            <a href="https://github.com/jelenkoo10" target="_blank"><img src={require("./Icons/github.png")} alt="Github icon" /></a>
        </div>
    )
}