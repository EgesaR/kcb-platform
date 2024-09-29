"use client"

import React, { useState, useEffect } from 'react';
import Loader from './loader';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      finishLoading();
    }, 100);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 bg-white dark:bg-[#0a0a0a] z-50">
        <Loader />
      </div>
    );
  } else {
    return null;
  }
};

export default SplashScreen;

