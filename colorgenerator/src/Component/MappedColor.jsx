import React, { useState, useEffect } from 'react';
export const MappedColor = ({ rgb, weight, MouseEffect, hex, index}) => {
         const [Alert, setAlert] = useState(false);
         const bcg = rgb.join(",")

         const HEX = `#${hex}`

         const ClipBoard = () =>{
             setAlert(true)
             navigator.clipboard.writeText(HEX);
         }
         
  useEffect( ()=> {
    const Display = setTimeout(() => {
      setAlert(false)
    }, 2000)

    return ()=> clearTimeout(Display)
       
  },[Alert] )

	return ( 
		<div className={`border-yellow-700 ${index > 10 ? `text-white` :`shadow-md`} hover:cursor-pointer`} onClick = {ClipBoard}>
			<div className="p-3 relative" onMouseOver={()=>MouseEffect(bcg)}
            style= {{background:`rgb(${bcg})`}}>
			 <div className="flex relative flex-col justify-center items-center">
                 <p>{weight} %</p>
                 <h4 className='py-3 relative'>{HEX}</h4>
                 {Alert ? <p className={``}>
                    copied to Clipboard
                 </p> : ""}
             </div>
			</div>
		</div>
	);
};
