import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { ADD_TODO } from '../redux/actions';
import { useDispatch } from 'react-redux';

/*
    Redux Saga:
    For adding Todo items to the state, we need to dispatch Actions, 
    and Actions will call the Reducer function which will update the state.
*/
export default function TodoAdder() {
    const [title, setTitle] = useState(null);

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem() {
        // We need to dispatch the ADD_TODO reduc action here 
        // We will come back here once the todo items are listed

    }

    return (
        <Box>
          <TextField 
            style={{
              width: 400,
            }} 
            label="Add new todo" 
            variant="filled"
            onChange={handleTextChange}
          ></TextField>
          <Button 
            style={{
              height: 55,
            }} 
            variant="contained" 
            onClick={addTodoItem}
            sx={{
                backgroundColor: "#935dff" 
            }}
          >
            Add
          </Button>
        </Box>
    );
};


