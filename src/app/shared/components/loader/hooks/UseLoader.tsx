import { useState, useEffect } from "react";

export const useLoader = () => {
  const [loading, setLoading] = useState(true);
  const [showOnlyName, setShowOnlyName] = useState(false);
  const [fadeName, setFadeName] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    const intervalId = setInterval(() => {}, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnlyName(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fadeNameTime = setTimeout(() => {
      setFadeName(true);
    }, 1200);

    return () => clearTimeout(fadeNameTime);
  }, []);

  return { loading, showOnlyName, fadeName };
};
