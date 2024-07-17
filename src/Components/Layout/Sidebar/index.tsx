import { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { usePathname } from "../../../Routes/use-pathname";
import { useResponsive } from "../../../Hooks/use-responsive";
import { NAV } from "../Header/config-layout";
import { renderContent } from "./SideContent";

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

const Sidebar: React.FC<NavProps> = ({ openNav, onCloseNav }) => {
  const pathname = usePathname();
  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname, openNav, onCloseNav]);

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `groove 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
