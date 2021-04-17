import React, {createContext, useState} from 'react';

export const NavToggleContext = createContext();

const NavToggleContextProvider = (props) => {
    const [isNavOpen, setIsNavOpen] =  useState(false);

    const changeNavStatus = () => {
        setIsNavOpen(!isNavOpen);
    }

    return(
        <NavToggleContext.Provider value={{isNavOpen, changeNavStatus}}>
            {props.children}
        </NavToggleContext.Provider>
    );
}

export default NavToggleContextProvider;