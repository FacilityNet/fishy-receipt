import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Fish } from "../src/index"
import "./showcase.css"
import oceanBlue from "./backgrounds/ocean-blue.jpg"
import oceanBubbles from "./backgrounds/ocean-bubbles.jpg"
import oceanDolphins from "./backgrounds/ocean-dolphins.jpg"
import oceanEmpty from "./backgrounds/ocean-empty.jpg"

const App = () => {
    const [image, setImage] = useState(oceanBlue);

    return (
        <>
            <div className="content-before">
                <button onClick={() => setImage(oceanBlue)}>Blue</button>
                <button onClick={() => setImage(oceanBubbles)}>Bubbles</button>
                <button onClick={() => setImage(oceanDolphins)}>Dolphins</button>
                <button onClick={() => setImage(oceanEmpty)}>Empty</button>
            </div>
            <div className="container" style={{ backgroundImage: `url(${image})`}}>
                <Fish ocean={{ widthInVw: 100, heightInVh: 50, background: "transparent" }}
                      fish={{ count: 100, startOffset: "-10%" }}
                      word={{ text: "APPELSIN", color: "yellow" }}/>,
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
