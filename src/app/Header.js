import React, {useContext, useState, useRef} from 'react';
import {Redirect} from 'react-router-dom';
import {AppContext} from "./index";

import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    const {item, setContextItem} = useContext(AppContext);
    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState('Marvel');

    console.log('Header - ', item)

    const handleTextFieldChange = (e) => {
        setText(e.target.value);
        console.log('TEXT - ', e.target.value)
    };

    const handleOnClick = (e) => {
        console.log('TEXT - ', e.target.value)
        setContextItem({...item,...{searchText: text}});
    };

    let textInput = useRef(null);
    const onClickHandler = (event) => {
        textInput.current.value = "";
        event.preventDefault();

    };

    const clickHandler = (event) => {
        event.preventDefault();
        setContextItem({...item,...{name: 'Test', itemsCount: 0}});
        setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/test"/>
    }

    if (item.name === 'Cool') {
        console.log('Cool - ', item)
        return <div style={{
            width: '99%',
            position: 'fixed',
            textAlign: "center",
            marginTop:'-80px',
            border1: '1px solid #cccc'}}
        >
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

                        <Typography
                            onClick={(e) => onClickHandler(e)}
                            variant="h4" component="div" sx={{ flexGrow: 1, marginLeft: 33 }}>
                            {item.searchText} ({item.itemsCount})
                        </Typography>

                        <TextField id="standard-basic" label="Search" variant="outlined"
                                   sx={{ input: { color: 'white' } ,label: { color: 'white' },
                                       value: text }}
                                   inputRef={textInput}
                                   onChange={(text) => handleTextFieldChange(text)}/>

                        <Button color="inherit" onClick={(e) => handleOnClick(e)}>Search</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    }

    if (item.name === 'CoolEdit' && item.item!== undefined) {
        console.log('CoolEdit - ', item)
        return <div style={{padding: '0px', fontSize: '30px', textAlign: "center", position: 'fixed',
            width: '99%',
            background: 'white',
            marginTop:'-80px',
            border: '1px solid #cccc'}}>
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
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            {item.item.trackName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>


        </div>
    }

    return null
};

export default Header;