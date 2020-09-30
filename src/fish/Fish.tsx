import React from "react"
import { getRandomInt, repeat } from "../lib/util"
import "./fish.css"

// This component is based on the following CodePen
// See: https://codepen.io/alicepopoff/pen/JMLpNM

function drawFish(key: number, scale: number, startOffset: string, onClick: React.MouseEventHandler<HTMLDivElement>) {
    const fishLayer = getRandomInt(1, 3)
    const layerScale = fishLayer / 2
    const fishContainerClass = `fish-container-${fishLayer}`

    const left = startOffset
    const top = `${getRandomInt(5, 90)}%`
    const fishScale = 0.7 + (Math.random() * 0.3)

    let transform = `rotate(45deg) scale(${scale * layerScale * fishScale})`
    const animation = `swim ${getRandomInt(40, 80)}s  ${getRandomInt(0, 80)}s infinite`

    return (
        <div key={key} className={`fish-container ${fishContainerClass}`} style={{ left, top, animation }} onClick={onClick}>
            <div className={`fish fish-color`} style={{ transform }}>
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
    fish: {
        count: number,
        scale: number,
        startOffset: string,
        color?: string,
        magicColor?: string,
    },
    word: {
        text: string,
        fontSize?: string,
        color?: string,
    }
}

export const Fish: React.FunctionComponent<Props> = ({ ocean, fish = { count: 10, scale: 1, startOffset: "-10%" }, word = { text: "FISH" } }) => {
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

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        const fishContainer = e.currentTarget
        fishContainer.style.animationDuration = "10s"
    }

    return (
        <div id="ocean" className="ocean" style={oceanStyle}>
            <div className="todays-word">
                <p>{ word.text }</p>
            </div>
            { [...repeat(fish.count, drawFish, fish.scale, fish.startOffset, handleClick)] }
        </div>
    )
}
