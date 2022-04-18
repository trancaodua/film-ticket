import { BrowserRouter, Route as RouteRoot, Routes } from "react-router-dom";
import MainLayout from "../layouts/main";
import Box from "@mui/material/Box";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <RouteRoot path="/" element={<MainLayout />}>
          <RouteRoot
            index
            element={<Box xs={{ backgroundColor: "red" }}>Page not found</Box>}
          />
        </RouteRoot>
      </Routes>
    </BrowserRouter>
  );
}
