import { Checkbox, FormControlLabel, FormGroup, ListItem } from '@mui/material';
import React, { useState } from 'react';

export default function TodoItem({ id, title, completed, important }) {

    // function to toggle the checkbox when it is pressed by the user
    function toggleCheckBox() {
        // Todo - need to dispatch TOGGLE action
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
                  label={title}
                ></FormControlLabel>
            </FormGroup>
        </ListItem>
    );
};