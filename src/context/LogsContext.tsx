"use client";

import React, { createContext, useState } from 'react';

 export const LogsContext = createContext({});


const LogsProvider = ({ children }: { children: React.ReactNode }) => {

    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const shareedData = {
        plan,
        setPlan,
        saved,
        setSaved
    }


    return (

        <LogsContext.Provider value={shareedData}>
            {children}
        </LogsContext.Provider>
    );
};

export default LogsProvider;