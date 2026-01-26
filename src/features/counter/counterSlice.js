import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    title: 'Простой Счётчик на Redux Toolkit',
    items: ['Яблоко', 'Банан', 'Апельсин'],
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer