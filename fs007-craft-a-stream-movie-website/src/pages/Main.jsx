import React from 'react';
import "./main.css"
import Schedule from "./Schedule";
import Trend from "./Trend";
import Blog from "./Blog";

function Main(props) {
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    );
}

export default Main;