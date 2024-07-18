import { memo, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { Notification } from "./Types";
import { renderContent } from "./RenderContent";
import Iconify from "../../UI/iconify";
import { fToNow } from "../../../utils/format-time";

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem = memo(({ notification }: NotificationItemProps) => {
  const renderAvatarAndTitle = useCallback(() => {
    const { avatar, title } = renderContent(notification);
    return { avatar, title };
  }, [notification]);

  const { avatar, title } = renderAvatarAndTitle();

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Iconify
              icon="eva:clock-outline"
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
});

export default NotificationItem;
