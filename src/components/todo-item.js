import { Checkbox, FormControlLabel, FormGroup, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { TOGGLE_COMPLETED } from '../redux/actions';

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
        </ListItem>
    );
};