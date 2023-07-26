"use client"

import { useEffect, useState } from "react";

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

const useFadeInOutMountAnimation = (delay: number = 1000) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  const shouldRenderChild = useDelayUnmount(isMounted, delay);

  const beforeMountFadeIn = { animation: `inAnimation ${delay}ms ease-in` };
  const unmountFadeOut = { animation: `outAnimation ${delay + 10}ms ease-in` };

  const causeContentFadeEffect = () => {
    setIsMounted(prev => !prev);
  };

  return {
    shouldRenderChild,
    contentAnimation: isMounted ? beforeMountFadeIn : unmountFadeOut,
    causeContentFadeEffect,
  }
}

export default useFadeInOutMountAnimation