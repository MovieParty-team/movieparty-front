import { ThemeConfig } from "antd";

import { TextColors, Colors } from "./colors";

const base = 20;
export const Spacing = {
  smaller: base / 3,
  small: base / 2,
  normal: base,
  medium: base * 2,
  large: base * 3,
};

export const borderRadius = 15;

export const Fonts = {};

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: Colors.primary,
    colorInfo: "#43a39d",
    fontSize: 14,
    colorText: TextColors.primary,
    borderRadius,
  },
  components: {
    Button: {
      borderRadius: 2,
      defaultBg: Colors.primary,
      defaultColor: TextColors.primary,
      defaultHoverColor: TextColors.primary,
      defaultHoverBg: "#444",
      defaultBorderColor: "black",
      defaultHoverBorderColor: "white",
      padding: 5,
    },
    Input: {
      colorText: TextColors.black,
    },
    Card: {
      colorText: TextColors.black,
      colorTextHeading: TextColors.black,
    }
  },
};
