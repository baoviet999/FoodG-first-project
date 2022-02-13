import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        current: JSON.parse(localStorage.getItem('user')) || {}
    },
    reducers: { 
        login(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.current = action.payload
        },
        logout(state, action) {
            localStorage.removeItem('user')
            localStorage.removeItem("carts");
            state.current = {}
        }
    }
})
const { actions, reducer } = userSlice
export const { login , logout} =  actions
export default reducer