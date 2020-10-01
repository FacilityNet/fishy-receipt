import * as CSS from "csstype"

declare module "csstype" {
    interface Properties {
        "--ocean-width-in-vw"?: number
        "--ocean-height-in-vh"?: number
        "--ocean-background"?: string
        "--todays-word-length"?: number
        "--todays-word-font-size"?: string
        "--todays-word-scale"?: number
        "--todays-word-color"?: string
        "--fish-background"?: string
        "--magic-fish-background"?: string
    }
}
