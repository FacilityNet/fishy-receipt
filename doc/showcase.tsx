import React, { useState, useRef } from "react"
import ReactDOM from "react-dom"
import { Fish } from "../src/index"
import "./showcase.css"
import oceanBlue from "./backgrounds/ocean-blue.jpg"
import oceanBubbles from "./backgrounds/ocean-bubbles.jpg"
import oceanDolphins from "./backgrounds/ocean-dolphins.jpg"
import oceanEmpty from "./backgrounds/ocean-empty.jpg"

const App = () => {
    const [image, setImage] = useState(oceanBlue)
    const [flipped, setFlipped] = useState(false)
    const flipClasses = `flip-card-inner ${flipped ? "flip-card-inner-flipped" : ""}`

    return (
        <>
            <div className="flip-card">
                <div className={flipClasses}>
                    <div className="flip-card-front">
                        <div className="content-before">
                            <button onClick={() => setFlipped(!flipped)}>Flip!</button>
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
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
