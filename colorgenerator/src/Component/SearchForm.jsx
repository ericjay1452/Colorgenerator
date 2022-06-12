import React,{useState} from "react";
import Values from 'values.js'
import {MappedColor } from "../Component/MappedColor"

export const SearchForm = ({MouseEffect})=> {
    const [color, setColor] = useState("")
    // eslint-disable-next-line
    const [Error, setError] = useState(false)
    const [list, setList] = useState(new Values("tomato").all(10))

    const handleSubmit = (e)=> {
      e.preventDefault();

      try {
          let colors = new Values(color).all(10);
          setList(colors);
          setColor("")
      } catch (error) {
          setError(true)
          setColor("")
          console.log(error)
      }
    }

    return (
        <>
        <section className="w-full relative block mt-2 mb-8">
          <form className="flex mx-auto w-6/12 px-2" onSubmit={handleSubmit}>

            <input className="p-1
            border-violet-800 
            text-center 
            rounded-xl 
            focus:outline-none 
            focus:ring 
            focus:ring-violet-300  
            mr-5
            "
            type="text" 
            name="text" value={color} 
            placeholder = {"Insert color input"}
            onChange = {(e)=>setColor(e.target.value)} />

            <button type="submit" value={"Submit"}
            className = "ml-1 rounded-xl px-3 py-1  border-2 border-gray-400 hover:border-violet-800 transition-all"
            >Submit</button>
                
          
          </form>
        </section>

        <section className="w-9/12 mx-auto mt-2 grid grid-cols-4 gap-4 text-center">
        {list.map((color, index) => {
            return <MappedColor key={index} {...color} 
            index = {index} MouseEffect = {MouseEffect}
            hex = {color.hex}
            />
        })}
        </section>
        
        </>
    )
}