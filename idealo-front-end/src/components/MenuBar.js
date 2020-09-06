import React from "react";
import './styles/MenuBar.css';
import {AppBar,Toolbar, Typography,IconButton,TextField} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Autocomplete from '@material-ui/lab/Autocomplete';
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const items = [
    {"title": "Electronics"},
    {"title": "Sports"},
    {"title": "Baby"},
    {"title": "Gaming"},
    {"title": "Fasghion"},
]

const MenuBar = () => {
    return (
        <div className="MenuBar">
            <AppBar position='static' style={{ backgroundColor: "#567F99" }}>
                <Toolbar className="tools">
                    <div className="menu">
                        <IconButton>
                            <MenuIcon style={{color: "white"}}/>
                        </IconButton>
                        <Typography>Categories</Typography>
                    </div>
                    <div className="search">
                        <Autocomplete
                            id="Search..."
                            freeSolo
                            options={items.map((option) => option.title)}
                            renderInput={(params) => (
                            <TextField {...params} label="I'm looking for..." margin="none" variant="outlined" className="searchauto" />
                            )}
                        />
                    </div>
                        <div className="notepad">
                            <FavoriteIcon />
                            <p>Notepad</p>
                        </div>
                        <div className="login">
                            <PersonOutlineIcon />
                            <p>Log in</p>
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuBar;