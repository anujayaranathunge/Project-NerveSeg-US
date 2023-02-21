import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const PatientDetailsCard = (patientAvatar, name, patientId) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={patientAvatar} />
      </ListItemAvatar>
      <ListItemText
        primary={`name`}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`user id`}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default PatientDetailsCard;
