import React, { useState } from 'react'
import { MdContentCopy , MdOutlineDoneOutline } from "react-icons/md"
function Button() {
    const [copied , setCopied] = useState<boolean>(false)

  return (
    <button
    onClick={(e) => {
        e.preventDefault()
        if(copied) return
        setCopied(true)
        window.getSelection()
        
        setTimeout(() => {
            setCopied(false)
        },2000)
    }}
    className='
    bg-neutral-800
    rounded-lg
    flex
    justify-center
    items-center
    py-2
    w-[120px]
    text-white
    font-medium
    '>
        <span
        className={`
        ${copied ? "hidden" : "animate-slide-up"}
        flex 
        items-center
        justify-center
        gap-1
        `}>
            Copy <MdContentCopy/>
        </span>

        <span
        className={`
        ${!copied ? "hidden" : "animate-slide-up"}
        flex 
        items-center
        justify-center
        gap-1
        `}>
            Copied <MdOutlineDoneOutline/>
        </span>
    </button>
  )
}

export default Button