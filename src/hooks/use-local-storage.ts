import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      if (!item || item === "undefined") {
        return initialValue;
      }
      // Try to parse it as JSON, but fall back to the raw string if it fails
      try {
        return JSON.parse(item);
      } catch (e) {
        // If it's not JSON, it might be a raw string value.
        // This is a common case if the storage value was set without JSON.stringify.
        return item as T; 
      }
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      if (item && item !== "undefined") {
        try {
          setStoredValue(JSON.parse(item));
        } catch(e) {
          // If parsing fails, assume it's a raw string
          setStoredValue(item as T);
        }
      }
    }
  }, [key]);

  return [storedValue, setValue];
}
