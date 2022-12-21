const colors = {
  black: "#1e1e1e",
  white: "#fff",
  grey: "#919cb4",
  blue_3: "#233869",
  blue_2: "#d3d7e1",
  blue_1: "#f7f8fB",
  transparent: "transparent",
};

interface Theme {
  // font
  fontPrimary: string;
  fontSecondary: string;
  // background
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundLight: string;
  // text
  textPrimary: string;
  textSecondary: string;
  textHighlight: string;
  // loader
  loaderBorder: string;
  loaderBorderActive: string;
}

export const theme: Theme = {
  // font
  fontPrimary: "Nunito",
  fontSecondary: "Indie Flower",
  // background
  backgroundPrimary: colors.blue_1,
  backgroundSecondary: colors.grey,
  backgroundLight: colors.white,
  // text
  textPrimary: colors.black,
  textSecondary: colors.grey,
  textHighlight: colors.blue_3,
  // loader
  loaderBorder: colors.blue_2,
  loaderBorderActive: colors.blue_3,
};

