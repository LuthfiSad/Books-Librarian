import React from "react";

const TopSection = ({ as: Component = "div", children, ...rest }) => {
  return <Component style={{ paddingTop: "96px" }} {...rest}>{children}</Component>;
};

export default TopSection;
