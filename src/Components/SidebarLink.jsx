import Link from "next/link";
import React from "react";

const SidebarLink = React.forwardRef(function SidebarLink(props, ref) {
  const { href, ...other } = props;

  return (
    <Link href={href} ref={ref} {...other} />
  );
});

export default SidebarLink;
