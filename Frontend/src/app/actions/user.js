import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

// Login action
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    console.log(BACKEND_URI);
    
    try {
      const response = await axios.post(`${BACKEND_URI}/user/login`, credentials);
     console.log(response.data);
     
      return response.data; // Return user data on success

    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message on failure
    }
  }
);

// Register action
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BACKEND_URI}/user/register`, userData);
      return response.data; // Return user data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message on failure
    }
  }
);