import { useEffect } from 'react';
import { useLocalStorage } from './UseLocalStorage';

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
      const body = document.querySelector('body');
      darkMode
        ? body.classList.add('dark-mode')
        : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];
  };