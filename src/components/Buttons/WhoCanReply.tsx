import React , {useState} from 'react'
import { BiWorld } from "react-icons/bi";
import { RiUserFollowLine, RiUserHeartLine } from 'react-icons/ri';
import { FiAtSign } from 'react-icons/fi';

type props = {
    value : string,
    setValue : React.Dispatch<React.SetStateAction<any>>
}

const WhoCanReply : React.FC<props> = ({
    value,
    setValue
}) => {
    const [active , setActive] = useState<boolean>(false)
  return (
    <div
    className='
    relative
    '>
        <button
        onClick={() => {
            setActive(prev => !prev)
        }}
        className='
        -translate-x-3
        flex
        gap-2
        items-center
        px-3
        py-0.5
        rounded-full
        text-[14px]
        font-semibold
        sm:hover:bg-neutral-300
        text-neutral-700
        '>
            <span
            className='
            text-[1rem]
            '>
                {
                (() => {
                    switch(value){
                        case "Everyone":
                            return<BiWorld/>
                        
                        case "People you follow":
                            return<RiUserFollowLine/>

                        case "People you mention":
                            return<FiAtSign/>
                    }
                })()
                }
            </span>

            <span>
                {value + " can reply"}
            </span>
        </button>

        <div
        className={`
        -translate-x-3
        transition-all
        duration-300
        flex
        flex-col
        items-stretch
        border-neutral-400
        absolute
        z-50
        bg-white
        rounded-lg
        top-[2.5rem]
        overflow-hidden
        ${active ? "max-h-[100vh] py-3 border-[1px]" : "max-h-0 p-0"}
        `}>

            <h3
            className='
            text-[1.25rem]
            font-semibold
            text-neutral-700
            px-3
            '>
            Who can reply
            </h3>


            {data.map((item , idx) => {
                switch(item){
                case "Everyone":
                    return(
                    <button
                    onClick={() => {
                    setValue((prev : any) => { return {...prev,who_can_reply : item}})
                    setActive(false)
                    }}
                    className='
                    flex
                    items-center
                    gap-3
                    py-3
                    px-3
                    font-bold
                    text-neutral-700
                    text-[14px]
                    sm:hover:bg-neutral-200
                    '
                    key={idx}>
                    <span
                    className='
                    flex
                    aspect-square
                    bg-neutral-700
                    text-[1.25rem]
                    p-2.5
                    rounded-full
                    text-white
                    '>
                        <BiWorld/>
                    </span>
                    <p>{item}</p>
                    </button>
                    )
                
                case "People you follow":
                    return(
                    <button
                    onClick={() => {
                    setValue((prev : any) => { return {...prev,who_can_reply : item}})
                    setActive(false)
                    }}
                    className='
                    flex
                    items-center
                    gap-3
                    py-3
                    px-3
                    font-bold
                    text-neutral-700
                    text-[14px]
                    sm:hover:bg-neutral-200
                    '
                    key={idx}>
                    <span
                    className='
                    flex
                    aspect-square
                    bg-neutral-700
                    text-[1.25rem]
                    p-2.5
                    rounded-full
                    text-white
                    '>
                        <RiUserFollowLine/>
                    </span>
                    <p>{item}</p>
                    </button>
                    )

                case "People you mention":
                    return(
                    <button
                    onClick={() => {
                    setValue((prev : any) => { return {...prev,who_can_reply : item}})
                    setActive(false)
                    }}
                    className='
                    flex
                    items-center
                    gap-3
                    py-3
                    px-3
                    font-bold
                    text-neutral-700
                    text-[14px]
                    sm:hover:bg-neutral-200
                    '
                    key={idx}>
                    <span
                    className='
                    flex
                    aspect-square
                    bg-neutral-700
                    text-[1.25rem]
                    p-2.5
                    rounded-full
                    text-white
                    '>
                        <FiAtSign/>
                    </span>
                    <p>{item}</p>
                    </button>
                    )
                }
            })}
        </div>

    </div>
  )
}

export default WhoCanReply

const data = [
  "Everyone",
  "People you follow",
  "People you mention"
]