import React, { useState, useEffect } from 'react';

function Random() {
    const [typeofcolor, settypeofcolor] = useState("hex");
    const [color, setcolor] = useState("#000");

    function Randomclr(length) {
        return Math.floor(Math.random() * length);
    }

    function handleHexClr() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Randomclr(hex.length)];
        }
        setcolor(hexColor);
    }

    function handelRgbClr() {
        const r = Randomclr(256);
        const g = Randomclr(256);
        const b = Randomclr(256);

        setcolor(`RGB(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeofcolor === "rgb") {
            handelRgbClr();
        } else {
            handleHexClr();
        }
    }, [typeofcolor]);

    return (
        <>
            <div style={{ backgroundColor: color }} className="h-[100vh] relative text-center">
                <button className='p-3 mt-2 absolute top-0 left-[600px] bg-slate-800 text-white font-bold rounded-xl' onClick={typeofcolor === "hex" ? handleHexClr : handelRgbClr}>Generate Random Color</button>
                <button className='p-3 mt-2 ml-2 absolute top-0 left-[100px] bg-slate-800 text-white font-bold rounded-xl' onClick={()=> settypeofcolor('hex')}>Generate Random Hexa Color</button>
                <button className='p-3 mt-2 ml-2 absolute top-0 right-[200px] bg-slate-800 text-white font-bold rounded-xl' onClick={()=> settypeofcolor('rgb')}>Generate Random RGB Color</button>
            </div>

            <div className='absolute bottom-3 text-white font-bold text-4xl  text-center left-1/2'>
                <h3>{typeofcolor == "rgb" ? "rgb" : "hex"}</h3>
                <h1>{color}</h1>
            </div>
        </>
    );
}

export default Random;