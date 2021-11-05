import React, { createContext, useState } from 'react'
import Prototype from '../components/prototype/prototype'

export const PrototypesContext = createContext();

const PrototypesContextProvider = ({ children }) => {
    const [prototypes] = useState(Prototype);
    return (
        <PrototypesContext.Provider value={{ prototypes }}>
            {
                children
            }
        </PrototypesContext.Provider>

    );
}

export default PrototypesContextProvider;