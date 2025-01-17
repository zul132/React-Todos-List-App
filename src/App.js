import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function TTBTodos() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <img  
                            alt = "TickTickBoom Todos logo"
                            style={{
                                width: "50px",
                            }} 
                            src="Todo_App_Logo.png"
                        ></img>
                    </IconButton>
                    <Typography variant="h5">Todos</Typography>
                </Toolbar>
            </AppBar>
        </div>
    ); 
}