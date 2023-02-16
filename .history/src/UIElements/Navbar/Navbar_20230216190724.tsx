import {
  Close,
  DarkMode,
  Help,
  LightMode,
  Menu,
  Message,
  NotificationAdd,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import { InitialState } from "Models";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout, setMode } from "State";

export const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: InitialState) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  // const neutralLight = theme.palette.

  return <div>Navbar</div>;
};
