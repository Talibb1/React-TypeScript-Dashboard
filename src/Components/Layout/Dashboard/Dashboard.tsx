import { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import Main from "./MainContent";
import Header from "../Header/header";



interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Sidebar openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <Main>
          {children}
        </Main>
      </Box>
    </>
  );
}
