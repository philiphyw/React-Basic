import React, { useState, useContext } from 'react'


const AppContext=React.createContext();

const AppProvider = ({children})=>{
    const[showSidebar,setShowSidebar]= useState(false);
    const[showModal,setShowModal]= useState(false);
    const testValue = "Hello, React.";

    const openSidebar=()=>{
        setShowSidebar(true);
    }
    const closeSidebar=()=>{
        setShowSidebar(false);
    }

    const openModal=()=>{
        setShowModal(true);
    }
    const closeModal=()=>{
        setShowModal(false);
    }

    return(
         <AppContext.Provider value={
        {showSidebar,showModal,openSidebar,closeSidebar,openModal,closeModal,testValue}
    }>{children}</AppContext.Provider>
    )};
//set up customer hook here
export const useGlobalContext =()=>{
    return useContext(AppContext);
};
export{AppContext,AppProvider};