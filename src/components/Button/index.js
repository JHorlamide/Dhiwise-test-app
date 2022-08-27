import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder20: "rounded-radius20",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder35: "rounded-radius35",
  icbCircleBorder15: "rounded-radius15",
  icbRoundedBorder27: "rounded-radius275",
  RoundedBorder17: "rounded-radius175",
  RoundedBorder15: "rounded-radius15",
  RoundedBorder10: "rounded-radius10",
  CircleBorder25: "rounded-radius25",
};
const variants = {
  icbFillGray103: "bg-gray_103",
  icbFillIndigo600: "bg-indigo_600",
  icbOutlineRed700: "border-2 border-red_700 border-solid",
  icbOutlineGreen600: "border-2 border-green_600 border-solid",
  icbOutlineGray300cc: "bg-white_A700 shadow-bs",
  OutlineIndigo500: "border border-indigo_500 border-solid text-indigo_500",
  FillIndigo600: "bg-indigo_600 text-white_A700",
  OutlineIndigo600: "border border-indigo_600 border-solid text-indigo_600",
  OutlineGray300cc: "bg-indigo_700 shadow-bs text-white_A700",
};
const sizes = {
  smIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdIcn: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  lgIcn: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xlIcn: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder20",
    "icbCircleBorder25",
    "icbCircleBorder35",
    "icbCircleBorder15",
    "icbRoundedBorder27",
    "RoundedBorder17",
    "RoundedBorder15",
    "RoundedBorder10",
    "CircleBorder25",
  ]),
  variant: PropTypes.oneOf([
    "icbFillGray103",
    "icbFillIndigo600",
    "icbOutlineRed700",
    "icbOutlineGreen600",
    "icbOutlineGray300cc",
    "OutlineIndigo500",
    "FillIndigo600",
    "OutlineIndigo600",
    "OutlineGray300cc",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "xlIcn", "sm", "md"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
