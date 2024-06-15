import useResponsive from "../hooks/useResponsive";

const Section = ({ children, ...rest }) => {
  const { isTablet } = useResponsive();
  return <section style={{ paddingInline: isTablet ? "1rem" : "3rem", width: "100%" }} {...rest}>{children}</section>;
}

export default Section