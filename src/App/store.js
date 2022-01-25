import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Pages/Login/userSlice'
import countReducer from '../feartures/Foodfeature/foodSlice'
const rootReducer = {
    user: userReducer,
    food: countReducer
}

const store = configureStore({
    reducer: rootReducer,
            
})
export default store
