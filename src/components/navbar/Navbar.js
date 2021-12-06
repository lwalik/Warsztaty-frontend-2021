import React, { useState } from "react";

import {
  AppBar,
  Divider,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createStyles,
} from "@material-ui/core";

import ChatIcon from "@material-ui/icons/Chat";
import GamesIcon from "@material-ui/icons/Games";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 0,

      "& hr": {
        height: 28,
        margin: theme.spacing(0, 2.5),
        background: theme.palette.common.white,
      },
    },

    tab: {
      display: "flex",
      width: 130,
      minWidth: "unset",
      height: 64,
      fontSize: theme.typography.fontSize,
      textTransform: "none",
      marginRight: 20,

      "&:hover": {
        opacity: 1,
      },

      "& > span": {
        flexDirection: "row",

        "& svg": {
          marginRight: theme.spacing(1),
          transform: "translateY(2px)",
        },
      },
    },

    tabs: {
      marginLeft: 300,
      color: theme.palette.common.white,
    },
  })
);

const Navbar = ({ setPick }) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h6">Menu</Typography>

        <Divider orientation="vertical" />

        <Tabs className={classes.tabs} value={tabValue}>
          <Tab
            className={classes.tab}
            label="Home"
            icon={<HomeOutlinedIcon />}
            onClick={() => {
              setTabValue(0);
              setPick(undefined);
            }}
          />
          <Tab
            className={classes.tab}
            label="Chat"
            icon={<ChatIcon />}
            onClick={() => {
              setTabValue(1);
              setPick(true);
            }}
          />
          <Tab
            className={classes.tab}
            label="Checkers"
            icon={<GamesIcon />}
            onClick={() => {
              setTabValue(2);
              setPick(false);
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
