import * as CSS from "csstype"

declare module "csstype" {
    interface Properties {
        "--ocean-width-in-vw"?: number
        "--ocean-height-in-vh"?: number
        "--todays-word-length"?: number
        "--todays-word-font-size"?: string
        "--todays-word-color"?: string
        "--fish-color"?: string
        "--magic-fish-color"?: string
    }
}
