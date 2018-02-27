import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-seriff"
  ],
  bodyFontFamily: [
    "Helvetica Neue",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "sans-seriff"
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflowY: "auto"
    }
  })
});

export default typography;

// googleFonts: [
//   {
//     name: "Open Sans",
//     styles: ["700", "300"]
//   },
//   {
//     name: "Open Sans",
//     styles: ["400"]
//   }
// ],
