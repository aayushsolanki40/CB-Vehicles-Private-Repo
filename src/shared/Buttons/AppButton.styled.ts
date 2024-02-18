import { Button } from "@mui/material";
import { styled, CSSObject } from "@mui/material/styles";
import { darken, lighten } from "@mui/material/styles";

type Variant = "contained" | "outlined" | "text";
type TextButtonStylesFunction = () => CSSObject;

/* Set background color and hover effect for each button type */
const containedButtonStyles: TextButtonStylesFunction = () => ({
  backgroundColor: "#FF7622",
  "&:hover": {
    backgroundColor: darken("#FF7622", 0.1),
  },
});

const outlinedButtonStyles: TextButtonStylesFunction = () => ({
  color: "#FF7622",
  borderColor: lighten("#FF7622", 0.4),
  "&:hover": {
    backgroundColor: "#ff762230",
    borderColor: lighten("#FF7622", 0.2),
  },
});

const textButtonStyles: TextButtonStylesFunction = () => ({
  color: "#FF7622",
  "&:hover": {
    backgroundColor: "#ff762230",
  },
});

/* Apply common button styles and styles based on type */
export const StyledButton = styled(Button)<{ variant: Variant }>(({
  variant,
}) => {
  const styleMappings: { [key in Variant]: TextButtonStylesFunction } = {
    contained: containedButtonStyles,
    outlined: outlinedButtonStyles,
    text: textButtonStyles,
  };

  const selectedStyle: TextButtonStylesFunction =
    styleMappings[variant] || containedButtonStyles;

  return {
    ...selectedStyle(),
    height: "46px",
    minWidth: "max-content",
    fontSize: "1rem",
    lineHeight: "1.5",
    textTransform: "none",
  };
});
