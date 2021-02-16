import React from 'react';

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

declare type Props = {
    ocean?: Readonly<{
        widthInVw?: number;
        heightInVh?: number;
        background?: string;
    }>;
    fish?: Readonly<{
        count?: number;
        scale?: number;
        startOffset?: string;
        background?: string;
        magicBackground?: string;
        interactive?: boolean;
    }>;
    word: Readonly<{
        text: string;
        fontSize?: string;
        scale?: number;
        color?: string;
    }>;
};
declare const Fish: React.FunctionComponent<Props>;

export { Fish };
//# sourceMappingURL=index.d.ts.map
