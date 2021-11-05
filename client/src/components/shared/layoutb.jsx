import React from 'react';
import _default from '../Back/Sidebar/Sidebar';
import './layout.scss'


const Layoutb=({ children }) => { 
    return (
    <>
    <_default />
    <main>
        {
            children
        }
    </main>
   
    </>
    );
}

export default Layoutb;