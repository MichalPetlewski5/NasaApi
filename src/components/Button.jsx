import React from 'react'

export default function Button(props) {
    const {text, updateWorkout} = props
  return (
        <button onClick={updateWorkout} className='px-8 py-4 mx-auto rounded-md border-[2px] bg-slate-950 border-blue border-solid blueShadow duration-200'> 
            <p>{text}</p>
        </button>
  )
}
