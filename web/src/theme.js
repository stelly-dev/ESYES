const baseTheme = {
  space: [0, 2, 4, 8, 16],
  // fontSizes: [14, 16, 18, 24, 32],
  colors: {
    primary: "#F9A33E",
    white: "#FFF",
    secondary: "#0EA6C6",
    "secondary-medium": "#7CCDDC",
    "secondary-light": "#DCF2F7",
    black: "#333333",
    gray: "#777777",
  },
  radii: [0, 2, 4, 8],
}

const flexboxgrid = {
  gridSize: 12, // columns
  gutterWidth: 1, // rem
  outerMargin: 2, // rem
  mediaQuery: "only screen",
  container: {
    sm: 46, // rem,
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em,
    sm: "768px", // em,
    md: "1024px", // em,
    lg: 75, // em
  },
}

export default {
  ...baseTheme,
  ...flexboxgrid,
  shadows: {
    small: "0px 3px 6px 0px rgba(0,0,0,1)",
    large: "0px 3px 6px #00000029",
  },
  fontWeights: {
    bold: 600,
    normal: 400,
    light: 300,
  },
  sizes: {
    maxWidth: ["100vw", "calc(1000vw / 11)", "90vw"],
    headerHeight: ["222px", "152px", "192px", "192px", "192px", "192px"],
  },
  logo: {
    width: [343, 396],
    height: [102, 118],
  },
  variants: {
    headerLogo: {
      maxWidth: [343, 343, 343, 396, 396, 396],
      maxHeight: [102, 102, 102, 118, 118, 118],
    },
  },
  fonts: {},
  fontSizes: {},
  breakpoints: ["350px", "768px", "1024px", "1200px", "2000px"],
}
