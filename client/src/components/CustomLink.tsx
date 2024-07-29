// CustomLink.tsx
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { useRouteContext } from "../context/NavLinkProvider";

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const { setCurrentRoute } = useRouteContext();

  const handleClick = () => {
    setCurrentRoute(to.toString());
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
