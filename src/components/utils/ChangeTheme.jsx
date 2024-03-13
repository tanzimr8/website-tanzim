import React from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage';

const ChangeTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme)
    return (
        <button onClick={handleChangeTheme}>Change Theme</button>
    )
}

export default ChangeTheme  