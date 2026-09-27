import { Suspense, type ComponentType } from "react";
import FitLogsCard from "../shared/FitLogsCard";
import { IFitLog } from "../../type";
import Loading from "../shared/loading";

const FitLogsCardWithLog = FitLogsCard as ComponentType<{
    log: IFitLog;
}>;

const allFitLogsPromise = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_FITLOG_API}`
        );

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("FITLOG API ERROR:", error);
        return [];
    }
};

const FitLogsContent = async () => {
    const logs = await allFitLogsPromise();

    return (
        <div className="rounded-2xl bg-base-500 shadow-lg">
            <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                {logs.map((log: IFitLog) => (
                    <FitLogsCardWithLog key={log.id} log={log} />
                ))}
            </div>
        </div>
    );
};



const FitLogs = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="mb-10 ml-10">
                <h1 className="text-4xl font-bold text-black">
                    THE LIBRARY
                </h1>

                <p className="text-sm text-gray-500">
                    Twelve lifts covering every major muscle group
                </p>
            </div>

            <Suspense fallback={<Loading/>}>
                <FitLogsContent />
            </Suspense>
        </div>
    );
};

export default FitLogs;