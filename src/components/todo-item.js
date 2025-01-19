import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from '../redux/actions';

// Import icons for deleting todos and marking todos as important
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function TodoItem({ id, title, completed, important }) {
    const dispatch = useDispatch();

    // function to toggle the checkbox when it is pressed by the user
    function toggleCheckBox() {
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {
                id,
            },
        });
    }

    // function to delete a particular todo
    function handleDeleteClick() {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id,
            },
        });
    }

    // function to toggle the todo's importance when user presses the star
    function toggleImportant() {
        dispatch({
            type:  TOGGLE_IMPORTANT,
            payload: {
                id,
            },
        });
    }

    return (
        <ListItem dense>
            <FormGroup>
                <FormControlLabel 
                  control={
                    <Checkbox 
                      checked={completed}
                      name={title}
                      onChange={toggleCheckBox}
                    />
                  }
                  label={
                    <Typography
                      style= {{
                        textDecoration: completed && "line-through",
                      }}
                    > 
                      {title}
                  </Typography>}
                ></FormControlLabel>
            </FormGroup>
            {/* Replace ListItemSecondaryAction */}
            <Box sx={{ marginLeft: "auto" }}>
                <IconButton onClick={toggleImportant} edge="end">
                    {/* Filled star is used to indicate important todos, while an Outlined star is used for the other todos */}
                    {important ? <StarIcon /> : <StarOutlineIcon /> }
                </IconButton>
                <IconButton onClick={handleDeleteClick} edge="end">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </ListItem>
    );
};