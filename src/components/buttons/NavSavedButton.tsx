
"use client";
import React, { useContext } from 'react';
import { LogsContext } from '@/src/context/LogsContext';
import { IFitLog } from '@/src/type';

const NavSavedButton = () => {

    const logsContext = useContext(LogsContext);

    const { saved } = logsContext as { saved: IFitLog[] }




    return (
        <div>
            {saved.length}
        </div>
    );
};

export default NavSavedButton;