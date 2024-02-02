import React, { ReactNode } from "react";
import { Box } from "@radix-ui/themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Box className="bg-seven min-h-screen">{children}</Box>;
};

export default Layout;
