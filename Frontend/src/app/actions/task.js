import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
const {token} = JSON.parse(localStorage.getItem('user'))
// Fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BACKEND_URI}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.yourTasks;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Add a new task
export const addTask = createAsyncThunk('tasks/addTask', async (taskData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BACKEND_URI}/tasks`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.newTaks;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update a task
export const updateTask = createAsyncThunk('tasks/updateTask', async ({ taskId, taskData }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`${BACKEND_URI}/tasks/${taskId}`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.updatedTask;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete a task
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BACKEND_URI}/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.removedTask;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});