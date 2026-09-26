
"use client";
import React, { useContext } from 'react';
import { LogsContext } from '@/src/context/LogsContext';
import { IFitLog } from '@/src/type';

const NavSavedButton = () => {

    const logsContext = useContext(LogsContext);

    const { plan } = logsContext as { plan: IFitLog[] }




    return (
        <div>
            {plan.length}
        </div>
    );
};

export default NavSavedButton;