import {createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart:(state, action)=>{
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                // alert("item added successfully!")
                Swal.fire({
                    position:"top-end",
                    icon:"success",
                    title:"Product Added to the Cart",
                    showConfirmButton:false,
                    timer:1500
                })
            }else{
                // alert("item already exists!")
                Swal.fire({
                    position:"top-end",
                    icon:"warning",
                    title:"Product Already in the Cart",
                    showCancelButton:true,
                    confirmButtonColor:"#3085d6",
                    cancelButtonColor:"#d33",
                    confirmButtonText:"OK!",
                })
            }
        },
        removeFromCart:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart:(state) => {
            state.cartItems = []
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer;