import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { changeTextColor } from './themeSlice';

const Theme = () => {
    const [color, setColor] = useState("White")
    const dispatch = useDispatch();
 
    return (
        <div>
            <input className='textbox' 
            type="text" 
             onChange={(e)=> setColor(e.target.value)
            }
            />
            <button className='button' onClick={()=>{dispatch( changeTextColor(color))}}>Change Text color</button>
        </div>
    );
};

export default Theme;