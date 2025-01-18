import React from 'react';

import { AppBar, Box, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

/* We are going to add styles using JSS instead of CSS */
const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100, /* default in pixels */
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign: "center",
        width: "100%",
    },
}));

export default function TTBTodos() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar 
                position="static"
                sx={{
                    backgroundColor: "#532ca0", // Replace with the exact purple color you want
                }}
            >
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <img  
                            alt="TickTickBoom Todos logo"
                            style={{
                                width: "50px",
                            }} 
                            src="Todo_App_Logo.png"
                        ></img>
                    </IconButton>
                    <Typography variant="h5">Todos</Typography>
                </Toolbar>
            </AppBar>

            {/* The Container component acts as a wrapper. It centers your content horizontally */}
            <Container className={classes.appContainer}>
                {/* The Paper component is a container for displaying content on an elevated surface */}
                <Paper className={classes.wrapper} elevation={0}>
                    {/* A component to add todos - "TodoAdder" */}
                    {/* The container area to display all todos - "TodosContainer*/} 
                </Paper>
            </Container>
        </Box>
    ); 
}
