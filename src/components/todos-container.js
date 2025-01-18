import React, { useState } from 'react';

import { Box, Grid2 } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "#e1d1ff",
    },
}));

export default function TodosContainer() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid2 container spacing={2}>

            </Grid2>
        </Box>
    ); 
}