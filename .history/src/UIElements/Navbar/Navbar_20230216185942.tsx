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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout, setMode } from "State";

export const Navbar = () => {
  return <div>Navbar</div>;
};
