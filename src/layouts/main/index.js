import React from "react";
import { Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";

//@MUI
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }}></Box>
      <Divider />
      <MainFooter />
    </Stack>
  );
}
