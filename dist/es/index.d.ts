import React from 'react';

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

interface Props {
    ocean?: {
        widthInVw: number;
        heightInVh: number;
    };
    fish?: {
        count: number;
        color?: string;
        magicColor?: string;
    };
    word?: {
        text: string;
        fontSize?: string;
        color?: string;
    };
}
declare const Fish: React.FunctionComponent<Props>;

export { Fish };
//# sourceMappingURL=index.d.ts.map
