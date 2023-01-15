import {configureStore} from "@reduxjs/toolkit";
import {ProjectReducer, ProjectSliceName} from "./reducers/projectSlice";

export const store = configureStore({
  reducer: {
    [ProjectSliceName]: ProjectReducer
  }
})
