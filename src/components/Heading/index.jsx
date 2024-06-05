import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[56px] font-extrabold md:text-5xl sm:text-[42px]",
  xs: "text-xl font-bold",
  lg: "text-7xl font-extrabold md:text-5xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={` text-gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
