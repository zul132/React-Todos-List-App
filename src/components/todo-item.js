import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { DELETE_TODO, TOGGLE_COMPLETED } from '../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';

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
                <IconButton onClick={handleDeleteClick} edge="end">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </ListItem>
    );
};