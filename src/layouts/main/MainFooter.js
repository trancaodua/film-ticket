import React from "react";

// @mui
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Iconify from "../../components/Iconify";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

//@router-dom
import { NavLink, useNavigate } from "react-router-dom";

const DividerVerticalStyle = styled(Box)(({ theme }) => ({
  borderRightStyle: "solid",
  borderRightColor: theme.palette.primary.main,
  height: "100%",
  display: "inline",
  marginLeft: 2,
}));

const NAV = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Login",
    path: "/",
  },
  {
    name: "About us",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
];

const SOCIAL = [
  {
    icon: "akar-icons:facebook-fill",
    path: "https://www.facebook.com/",
  },
  {
    icon: "akar-icons:instagram-fill",
    path: "https://www.instagram.com/",
  },
  {
    icon: "akar-icons:twitter-fill",
    path: "https://twitter.com",
  },
  {
    icon: "bxl:gmail",
    path: "https://www.google.com/",
  },
];

function MainFooter() {
  const navigate = useNavigate();
  return (
    <Container sx={{ p: 2 }}>
      <Grid container sx={{ justifyContent: "center", gap: 1 }}>
        {NAV.map((link) => (
          <Grid item key={link.name}>
            <Link
              underline="none"
              to={link.path}
              color="inherit"
              variant="body2"
              component={NavLink}
              sx={{ fontSize: 16 }}
            >
              {link.name}
            </Link>
            <DividerVerticalStyle />
          </Grid>
        ))}
      </Grid>

      <Grid container sx={{ justifyContent: "center", gap: 1 }}>
        {SOCIAL.map((item) => (
          <Grid item key={item.icon}>
            <IconButton component={Link} target="_blank" href={item.path}>
              <Iconify icon={item.icon} />
            </IconButton>
          </Grid>
        ))}
      </Grid>

      <Typography
        component="p"
        variant="body2"
        sx={{
          fontSize: 13,
          textAlign: "center",
        }}
      >
        trancaodua1992@gmail.com @{new Date().getFullYear()}. All rights
        reserved
      </Typography>
    </Container>
  );
}

export default MainFooter;
