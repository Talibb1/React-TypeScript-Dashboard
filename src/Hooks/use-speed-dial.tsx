import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SimpleDialogDemo from './SpeedDial/color'; // Import the SimpleDialogDemo component

import ColorLensIcon from "@mui/icons-material/ColorLens";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AlignHorizontalRightOutlinedIcon from "@mui/icons-material/AlignHorizontalRightOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const [hoveredAction, setHoveredAction] = React.useState(null);
  const [colorDialogOpen, setColorDialogOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState('#000000');

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = () => setOpen(true);
  const handleMouseEnter = (actionName) => setHoveredAction(actionName);
  const handleMouseLeave = () => setHoveredAction(null);

  const handlePresets = () => {
    setColorDialogOpen(true);
    handleClose();
  };

  const handleDarkMode = () => {
    alert("DarkMode clicked!");
    handleClose();
  };

  const handleLayout = () => {
    alert("Layout clicked!");
    handleClose();
  };

  const handleRightToLeft = () => {
    alert("RightToLeft clicked!");
    handleClose();
  };

  const handleDialogClose = (value) => {
    setColorDialogOpen(false);
    if (value) {
      setSelectedColor(value);
      // Use the selected color where needed, for example:
      console.log("Selected color:", value);
    }
  };

  const actions = [
    {
      icon: <ColorLensIcon sx={{ color: "black" }} />,
      name: "Presets",
      onClick: handlePresets,
    },
    {
      icon: <DarkModeOutlinedIcon sx={{ color: "black" }} />,
      name: "DarkMode",
      onClick: handleDarkMode,
    },
    {
      icon: <AlignHorizontalCenterIcon sx={{ color: "black" }} />,
      name: "Layout",
      onClick: handleLayout,
    },
    {
      icon: <AlignHorizontalRightOutlinedIcon sx={{ color: "black" }} />,
      name: "RightToLeft",
      onClick: handleRightToLeft,
    },
  ];

  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon icon={<SettingsIcon />} />}
        onClick={handleToggle}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={hoveredAction === action.name}
            onClick={action.onClick}
            onMouseEnter={() => handleMouseEnter(action.name)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </SpeedDial>

      <SimpleDialogDemo
        open={colorDialogOpen}
        selectedValue={selectedColor}
        onClose={handleDialogClose}
      />
    </Box>
  );
}
