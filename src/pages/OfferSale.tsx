import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const initialTime: number = 12 * 60 * 60; // 12 hours in seconds
  const [seconds, setSeconds] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: number;

    if (isRunning && seconds > 0) {
      interval = window.setInterval(() => {
        setSeconds((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
      setSeconds(initialTime); // Restart the timer to the initial time
    }
  }, [seconds, initialTime]);

  // Function to format the time as "HH:MM:SS"
  const formatTimeComponent = (time: number): string => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className="countdown-timer flex flex-col items-center justify-center py-8 my-4">
      <h2 className=' text-sm sm:text-base md:text-xl lg:text-3xl font-semibold'>Limited Time Offer</h2>
      <p className='text-xl py-4'>Hurry Up</p>
      <div className="timer">
        <span className="hour"><span className='text-xl'>Time Left</span>: <span className='inline-block bg-slate-300 text-slate-900 p-1  text-sm mx-2'>{formatTimeComponent(Math.floor(seconds / 3600))}Hr</span></span>
        <span className="separator">:</span>
        <span className="minute"><span className='inline-block bg-slate-300 text-slate-900 p-1  text-sm mx-2'>{formatTimeComponent(Math.floor((seconds % 3600) / 60))}Min</span></span>
        <span className="separator">:</span>
        <span className="second"><span className='inline-block bg-slate-300 text-slate-900 p-1 text-sm mx-2'>{formatTimeComponent(seconds % 60)}Sec</span></span>
      </div>
    </div>
  );
};

export default CountdownTimer;
