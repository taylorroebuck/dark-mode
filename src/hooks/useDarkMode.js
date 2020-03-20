import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false);
    useEffect(() => {
        const body = document.getElementById('bodyTag');
        darkMode
            ? body.classList.add('dark-mode')
            : body.classList.remove('dark-mode');
    }, [darkMode]);
    return [darkMode, setDarkMode];
};