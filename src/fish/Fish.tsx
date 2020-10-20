import React from "react"
import { getRandomInt, makeStyles, repeat } from "../lib/util"
import "./fish.css"

// This component is based on the following CodePen
// See: https://codepen.io/alicepopoff/pen/JMLpNM

function drawFish(key: number, scale: number, startOffset: string, onClick?: React.MouseEventHandler<HTMLDivElement>) {
    const first = key === 0

    const fishLayer = first ? 2 : getRandomInt(1, 3)  // first fish in front layer
    const layerScale = fishLayer / 2
    const fishContainerClass = `fish-container-${fishLayer}`

    const left = startOffset
    const top = first ? "50%" : `${getRandomInt(20, 80)}%`  // first fish near center
    const fishScale = 0.7 + (Math.random() * 0.3)

    const transform = `rotate(45deg) scale(${scale * layerScale * fishScale})`
    // Make sure first fish appears quickly on screen
    const delay = first ? 0 : getRandomInt(0, 80)
    const duration = first ? 40 : getRandomInt(40, 80)
    const animation = `swim ${duration}s  ${delay}s infinite`

    return (
        <div key={key} className={`fish-container ${fishContainerClass}`} style={{ left, top, animation }} onClick={onClick}>
            <div className={`fish fish-color`} style={{ transform }}>
                <div className="fish-eyes"></div>
                <div className="fish-tail"></div>
            </div>
        </div>
    )
}

export type Props = {
    ocean?: Readonly<{
        widthInVw?: number
        heightInVh?: number
        background?: string
    }>
    fish?: Readonly<{
        count?: number
        scale?: number
        startOffset?: string
        background?: string
        magicBackground?: string
        interactive?: boolean
    }>,
    word: Readonly<{
        text: string
        fontSize?: string
        scale?: number
        color?: string
    }>
}

export const Fish: React.FunctionComponent<Props> = ({ ocean, fish, word = { text: "FISH" } }) => {
    const fishy = Object.assign({ count: 10, scale: 1, startOffset: "-30%", interactive: true }, fish)

    function* generateStyles(): Generator<React.CSSProperties, void, unknown> {
        if (ocean?.widthInVw !== undefined) yield { "--ocean-width-in-vw": ocean.widthInVw }
        if (ocean?.heightInVh !== undefined) yield { "--ocean-height-in-vh": ocean.heightInVh }
        if (ocean?.background !== undefined) yield { "--ocean-background": ocean.background }
        if (fishy.background !== undefined) yield { "--fish-background": fishy.background }
        if (fishy.magicBackground !== undefined) yield { "--magic-fish-background": fishy.magicBackground }
        yield { "--todays-word-length": word.text.length }
        if (word.fontSize !== undefined) yield { "--todays-word-font-size": word.fontSize }
        if (word.scale !== undefined) yield { "--todays-word-scale": word.scale }
        if (word.color !== undefined) yield { "--todays-word-color": word.color }
    }

    const oceanStyle = makeStyles(generateStyles())

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        const fishContainer = e.currentTarget
        fishContainer.style.animationDuration = "10s"
    }
    const handlerToUse = fishy.interactive ? handleClick : undefined

    return (
        <div id="ocean" className="ocean" style={oceanStyle}>
            <div className="todays-word">
                <p>{ word.text }</p>
            </div>
            { [...repeat(fishy.count, drawFish, fishy.scale, fishy.startOffset, handlerToUse)] }
        </div>
    )
}
