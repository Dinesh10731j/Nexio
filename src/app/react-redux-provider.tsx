"use client"

import { Provider } from "react-redux";
import store from "@/redux/store/store";
import React from "react";

export const ReactReduxProvider = ({children}:(React.PropsWithChildren))=>{
    return(
        <>
        <Provider store={store}>
            {children}

        </Provider>
        </>
    )

}