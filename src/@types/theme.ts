export interface ThemeColors {
    primary: string;
    secondary100: string;
    secondary90: string;
    secondary80: string;
    secondary70: string;
    secondary60: string;
    secondary50: string;
    secondary40: string;
    secondary30: string;
    overlay: string;
    highlight: string;
    heading: string;
    line: string;
    on: string;
}

export interface ThemeFonts {
    title700: string;
    title500: string;
    text400: string;
    text500: string;
}

export interface Theme {
    colors: ThemeColors;
    fonts: ThemeFonts;
}
