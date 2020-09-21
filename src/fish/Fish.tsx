import React from "react"
import { getRandomInt, repeat } from "../lib/util"
import "./fish.css"

// This component is based on the following CodePen
// See: https://codepen.io/alicepopoff/pen/JMLpNM

function drawFish(onClick: React.MouseEventHandler<HTMLDivElement>) {
    const fishLayer = getRandomInt(1, 3)
    const fishContainerClass = `fish-container-${fishLayer}`

    const left = `-30%`;
    const top = `${getRandomInt(5, 90)}%`;

    let transform = `rotate(45deg) scale(${1 / getRandomInt(2, 6)})`
    const animation = `swim ${getRandomInt(40, 80)}s  ${getRandomInt(0, 80)}s infinite`

    return (
        <div className={`fish-container ${fishContainerClass}`} style={{ left, top, transform, animation }} onClick={onClick}>
            <div className={`fish fish-color`}>
                <div className="fish-eyes"></div>
                <div className="fish-tail"></div>
            </div>
        </div>
    )
  }

export interface Props {
    ocean?: {
        widthInVw: number,
        heightInVh: number,
    }
    fish?: {
        count: number,
        color?: string,
        magicColor?: string,
    },
    word?: {
        text: string,
        fontSize?: string,
        color?: string,
    }
}

export const Fish: React.FunctionComponent<Props> = ({ ocean, fish, word }) => {
    function* generateStyles() {
        if (ocean !== undefined) {
            yield {
                "--ocean-width-in-vw": ocean.widthInVw,
                "--ocean-height-in-vh": ocean.heightInVh
            }
        }
        if (fish?.color !== undefined) yield {
            "--fish-color": fish.color
        }
        if (fish?.magicColor !== undefined) yield {
            "--magic-fish-color": fish.magicColor
        }
        if (word !== undefined) yield {
            "--todays-word-length": word.text.length
        }
        if (word?.fontSize !== undefined) yield {
            "--todays-word-font-size": word.fontSize
        }
        if (word?.color !== undefined) yield {
            "--todays-word-color": word.color
        }
    }

    const oceanStyle = [...generateStyles()].reduce((acc, cur) => (Object.assign(acc, cur)), {})
    const wordOfTheDay = word?.text ?? "Fish"
    const numberOfFish = fish?.count ?? 70

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        const fishContainer = e.currentTarget
        fishContainer.style.animationDuration = "10s"
    }

    return (
        <div id="ocean" className="ocean" style={oceanStyle}>
            <div className="todays-word">
                <p>{ wordOfTheDay }</p>
            </div>
            { repeat(numberOfFish, drawFish, handleClick) }
        </div>
    )
}
