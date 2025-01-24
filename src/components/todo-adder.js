import { Box, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

import { ADD_TODO } from '../redux/actions';
import { useDispatch } from 'react-redux';

/*
    Redux Saga:
    For adding Todo items to the state, we need to dispatch Actions, 
    and Actions will call the Reducer function which will update the state.
*/
export default function TodoAdder() {
    const [title, setTitle] = useState(null);
    const titleFieldRef = useRef(null);

    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem() {
      /* Check if the user has typed anything in the Textfield before adding a new todo item */
      if (title) {
        dispatch({
          type: ADD_TODO,
          payload: {
            title,
          },
        });
        setTitle(null);
        // clear the Textfield after new todo item is added
        titleFieldRef.current.value = "";
      }
    }

    return (
        <Box>
          <TextField 
            style={{
              width: 400,
            }} 
            inputRef={titleFieldRef}
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
              backgroundColor: "#935dff", // Default color
              "&:hover": {
                backgroundColor: "#7d4de0", // Slightly darker shade on hover
              },
              "&:active": {
                backgroundColor: "#683bb8", // Even darker shade when clicked
              },
            }}
          >
            Add
          </Button>
        </Box>
    );
};