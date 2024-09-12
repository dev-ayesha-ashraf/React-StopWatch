import React, { useState, useEffect, useRef } from "react";
export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsetTime, setElapesdTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapesdTime(Date.now() - startTimeRef.current)
            }, 10)
        }
        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsetTime;

    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapesdTime(0);
        setIsRunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapsetTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsetTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsetTime / (1000) % 60);
        let miliSeconds = Math.floor((elapsetTime % 1000) / 10);
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
miliSeconds = String(miliSeconds).padStart(2, "0");


        return `${minutes}:${seconds}:${miliSeconds}`;
    }
    return (<div className="w-full h-[100vh] flex text-center justify-center align-center">

        <div className="w-3/4 h-[45%] border-2 m-auto rounded-md bg-slate-100 flex flex-col justify-center align-center">
            <div className="time w-11/12 h-[30%] border-2 rounded-md bg-slate-100 m-auto flex text-center align-center justify-center text-7xl bg-white border-0 shadow-lg shadow-slate-400">
                <p className="mt-auto mb-auto">
                    {formatTime()}

                </p>
            </div>
            <div className="flex justify-evenly w-11/12 mx-auto mb-auto">
                <button className="buttonOne text-xl h-14 w-[28%] bg-[red] text-white rounded-md" onClick={start}>Start</button>
                <button className="buttonTwo text-xl h-14 w-[28%] bg-[red] text-white rounded-md" onClick={stop}>Stop</button>
                <button className="buttonThree text-xl h-14 w-[28%] bg-[red] text-white rounded-md" onClick={reset}>Reset</button>
            </div>


        </div>
    </div>)

}