import { ReactNode } from "react";
import { StyledButton } from "./AppButton.styled";

type AppButtonProps = {
  variant?: "contained" | "text" | "outlined";
  label: string | number | ReactNode | "";
  sx?: object;
  disabled?: boolean;
  onClick?: () => void;
  endIcon?: ReactNode;
};

const AppButton: React.FC<AppButtonProps> = ({
  variant = "contained",
  label = "Submit",
  disabled = false,
  onClick,
  endIcon,
  sx = {},
}: AppButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      sx={{ ...sx }}
      onClick={onClick}
      endIcon={endIcon}
    >
      {label}
    </StyledButton>
  );
};

export default AppButton;
