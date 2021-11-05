import React, { createContext, useState } from 'react'
import Mydesigns from '../components/mydesigns/Mydesigns'

export const MydesignsContext = createContext();

const MydesignsContextProvider = ({ children }) => {
    const [designs] = useState(Mydesigns);
    return (
        <MydesignsContext.Provider value={{ designs }}>
            {
                children
            }
        </MydesignsContext.Provider>

    );
}

export default MydesignsContextProvider;