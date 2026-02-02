import { useState, useEffect } from "react";

const useSessionStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn("Failed to read sessionStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("Failed to write sessionStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};

export default useSessionStorage;
