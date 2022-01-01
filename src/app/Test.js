import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "./index";

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

const Test = () => {
    const {item, setContextItem} = useContext(AppContext);
    console.log('item - ', item)
  return (
    <div>
      <br />
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <hr />

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>

        <hr />

        <form noValidate>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>

        <hr />

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
};

export default Test;
