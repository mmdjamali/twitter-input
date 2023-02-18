import React, { useRef, useState } from 'react'
import { IconType } from 'react-icons/lib'

type props = {
    Icon : IconType,
    name : string
}

const ButtonWithTooltip : React.FC<props> = ({
    Icon,
    name
}) => {
    const [tooltip , setToolTip] = useState<boolean>(false)
    const timeout = useRef<null | number>(null)
    return (
    <div
    className='
    relative
    flex
    flex-col
    '>

        <button
        onMouseEnter={() => {
            if(timeout.current) clearTimeout(timeout.current);

            timeout.current = setTimeout(() => {
                setToolTip(true)
            },750)
        }}
        onMouseLeave={() => {
            if(timeout.current) clearTimeout(timeout.current);
            setToolTip(false)
        }}
        className='
        text-[1.25rem]
        p-2
        text-neutral-700
        rounded-full
        sm:hover:bg-neutral-200
        '>
            <Icon/>
        </button>

        <span
        className={`
        overflow-hidden
        transition-all
        duration-300
        absolute
        bg-neutral-600
        text-white
        text-[12px]
        top-[calc(100%_+_8px)]
        left-[50%]
        translate-x-[-50%]
        rounded-full
        ${tooltip ? "max-h-[100vh] opacity-1 px-3 py-1" : "max-h-0"}
        `}>
            {name}
        </span>

    </div>
  )
}

export default ButtonWithTooltip