import React from "react";

const sizeClasses = {
  txtOpenSansRegular14LightblueA700: "font-normal font-opensans",
  txtNotoSansSCMedium12: "font-medium font-notosanssc",
  txtOpenSansRegular14Bluegray50002: "font-normal font-opensans",
  txtOpenSansBold18: "font-bold font-opensans",
  txtOpenSansSemiBold16LightblueA700: "font-opensans font-semibold",
  txtOpenSansSemiBold12Bluegray800: "font-opensans font-semibold",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansBold20Bluegray700: "font-bold font-opensans",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansBold14: "font-bold font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansSemiBold16Bluegray600: "font-opensans font-semibold",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansSemiBold16Bluegray800: "font-opensans font-semibold",
  txtOpenSansBold16Bluegray900: "font-bold font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansRegular10: "font-normal font-opensans",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular14Bluegray600: "font-normal font-opensans",
  txtOpenSansSemiBold12: "font-opensans font-semibold",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtOpenSansRegular12Bluegray800: "font-normal font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
