// @mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

import Logo from "./Logo";

// @react-router-dom
import { NavLink } from "react-router-dom";

export default function LeftNav({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Stack
        sx={{
          display: "flex",
          width: 200,
          minHeight: "100%",
        }}
      >
        <Box onClick={onClose} onKeyDown={onClose}>
          <List sx={{ padding: 0 }}>
            <ListItem
              button
              sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            >
              <ListItemIcon>
                <Logo />
              </ListItemIcon>
            </ListItem>
            <Divider />

            <ListItem button component={NavLink} to={"/"}>
              <ListItemText primary="Best Seller" />
            </ListItem>

            <ListItem button component={NavLink} to={"/"}>
              <ListItemText primary="Now Playing" />
            </ListItem>

            <ListItem button component={NavLink} to={"/"}>
              <ListItemText primary="Opening This Week" />
            </ListItem>

            <ListItem button component={NavLink} to={"/"}>
              <ListItemText primary="Comming Soon" />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ height: 30, backgroundColor: "blue" }} />
      </Stack>
    </Drawer>
  );
}
