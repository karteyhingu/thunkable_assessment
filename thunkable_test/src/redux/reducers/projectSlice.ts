import {createSlice} from "@reduxjs/toolkit";
import {ProjectSlice} from "../types/ProjectSlice";

const initialState: ProjectSlice = {
  projects: []
}

export const ProjectSliceName = "project"

const projectSlice = createSlice({
  name: ProjectSliceName,
  initialState: initialState,
  reducers: {
    updateProjects: (state, action) => {
      state.projects = action.payload
    },
    clear: (state, action) => {
      state.projects = [];
    }
  }
});

export const projectAction: { updateProjects, clear } = projectSlice.actions

export const ProjectReducer = projectSlice.reducer
