"use client"

import { refreshCart } from "@/app/globalredux/features/cart/cartSlice";
import { finalSelection, setChanges } from "@/app/globalredux/features/productslice/productslice";


export const clearCartAndItsRelated = (dispatch)=>{


    dispatch(refreshCart([]))
    dispatch(setChanges({changeInQuantity:'initial',changeInSize:'initial'}))
    dispatch(finalSelection({selectedQuantity:1,selectedSize:'S'}));
}