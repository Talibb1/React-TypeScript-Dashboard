import React, { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import Main from "./MainContent";
import Header from "../Header/header";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [openNav, setOpenNav] = useState(false);

  // Toggle sidebar state
  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <>
      <HeaderMemo onOpenNav={toggleNav} />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <SidebarMemo openNav={openNav} onCloseNav={toggleNav} />
        <MainMemo>{children}</MainMemo>
      </Box>
    </>
  );
};

const SidebarMemo = React.memo(Sidebar);
const MainMemo = React.memo(Main);
const HeaderMemo = React.memo(Header);

export default DashboardLayout;
