
import FitLogsCard from "../shared/FitLogsCard";
import { IFitLog } from "../../type";
import type { ComponentType } from "react";

const FitLogsCardWithLog = FitLogsCard as ComponentType<{ log: IFitLog }>;

const allFitLogsPromise = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_FITLOG_API}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);

        return [];
    }
}



const FitLogs = async () => {

    const logs = await allFitLogsPromise();

    // console.log("alllogs: ", logs);

    return (
        <div className="container mx-auto mb-10">
            <div className="mb-10 ml-10">
                <h1 className="text-4xl font-bold text-black">THE LIBRARY</h1>
                <p className="text-sm text-gray-500">Twelve lifts covering every major muscle group
                </p>
            </div>
            <div className="bg-base-500 rounded-2xl shadow-lg">



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 p-10">


                    {


                        logs.map((log: IFitLog) => {

                            return (
                                <FitLogsCardWithLog key={log.id} log={log} />
                            )

                        })
                    }







                </div>
            </div>
        </div>
    );
};

export default FitLogs;