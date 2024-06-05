import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-2xl font-normal md:text-[22px]",
  s: "text-lg font-normal",
  md: "text-xl font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
