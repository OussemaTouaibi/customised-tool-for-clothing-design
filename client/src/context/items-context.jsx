import React, { createContext, useState } from 'react'
import Item from '../components/items/item'

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
    const [items] = useState(Item);
    return (
        <ItemsContext.Provider value={{ items }}>
            {
                children
            }
        </ItemsContext.Provider>

    );
}

export default ItemsContextProvider;