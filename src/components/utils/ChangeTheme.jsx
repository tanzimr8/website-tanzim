import React from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage';

const ChangeTheme = ({handleChangeTheme}) => {
    return (
        <button onClick={handleChangeTheme}>Change Theme</button>
    )
}
export default ChangeTheme ; 