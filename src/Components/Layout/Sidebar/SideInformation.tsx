import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const renderUpgrade = (
  <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
    <Stack
      alignItems="center"
      spacing={3}
      sx={{ pt: 5, borderRadius: 2, position: "relative" }}
    >
      <Box
        component="img"
        src="/assets/illustrations/illustration_avatar.png"
        sx={{ width: 100, position: "absolute", top: -50 }}
      />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">Admin Dashboard</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          Copyright © 2024 Talib Uddin Qazi ®
        </Typography>
      </Box>
    </Stack>
  </Box>
);
