import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./StudentsDataSlice"

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})
