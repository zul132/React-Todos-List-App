import React, { useState } from 'react';

import { Box, Divider, List, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';

const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "#e1d1ff",
    },
}));

export default function TodosContainer() {
    const classes = useStyles();

    // useSelecter API allow us to select a portion of the state
    // We need to deconstruct todos since todos will be returned as an Object by wrapping in {}
    const { todos } = useSelector((state) => {
        return {
            todos: state.todos,
        };
    });

    console.log(todos);

    return (
        <Box className={classes.root}>
           <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        My Todos
                    </Typography>
                    <Divider />
                    <List>
                        {todos.map(todo => {
                            if (!todo.completed) {
                                return <TodoItem {...todo} />;
                            } else {
                                return null;
                            }
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        Completed
                    </Typography>
                    <Divider />
                    <List>
                        {todos.map(todo => {
                            if (todo.completed) {
                                return <TodoItem {...todo} />;
                            } else {
                                return null;
                            }
                        })}
                    </List>
                </Grid>
            </Grid>
        </Box>
    ); 
}