import { useState, useEffect } from 'react';

const localStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log('Error reading LocalStorage', error) ;
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log('Error saving to LocalStorage', error);
        }
    }, [key, storedValue]);
    
    return [storedValue, setStoredValue]
};

export default localStorage