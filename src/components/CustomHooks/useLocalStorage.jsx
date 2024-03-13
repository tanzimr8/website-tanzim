import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultValue) => {
    const [value,setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue)) //while getting... string to json
        }
        catch(e){
            console.log(e);
            currentValue = String(defaultValue);
        }
        return currentValue;
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value)) //while setting json to string
    },[key,value]);

    return [value,setValue];
}

export default useLocalStorage