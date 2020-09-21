import React from "react"
import ReactDOM from "react-dom"
import { Fish } from "../src/index"
import "./showcase.css"

ReactDOM.render(
    <>
        <div className="content-before"></div>
        <div className="container">
            <Fish ocean={{ widthInVw: 100, heightInVh: 50 }} fish={{ count: 10, color: "rebeccapurple" }} word={{ text: "APPELSIN", color: "yellow" }}/>,
        </div>
    </>,
    document.getElementById("root")
)
