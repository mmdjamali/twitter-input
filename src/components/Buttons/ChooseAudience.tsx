import React , {useState} from 'react'
import {RiArrowDownSLine, RiUserHeartLine} from "react-icons/ri"
import { BiWorld } from "react-icons/bi";

type props = {
  value : string,
  setValue : React.Dispatch<React.SetStateAction<any>>
}

const ChooseAudience : React.FC<props> = ({
  value,
  setValue
}) => {
  const [active , setActive] = useState<boolean>(false)

  return (
    <div
    className='
    flex
    '>
      <button
      onClick={() => {
        setActive(!active)
      }}
      className='
      border-[1px]
      border-neutral-400
      px-3
      rounded-full
      text-neutral-600
      flex
      items-center
      justify-center
      text-[14px]
      font-semibold
      gap-1
      sm:hover:bg-neutral-200
      sm:active:bg-neutral-300
      '>
        <span>
          {value}
        </span>
        <Arrow active={active}/>
      </button>

      <div
      className={`
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
      ${active ? "max-h-[100%] py-3 border-[1px]" : "max-h-0 p-0"}
      `}>

        <h3
        className='
        text-[1.25rem]
        font-semibold
        text-neutral-700
        px-3
        '>
          Choose Audience
        </h3>


          {data.map((item , idx) => {
            switch(item){
              case "Everyone":
                return(
                <button
                onClick={() => {
                  setValue((prev : any) => { return {...prev,audience : item}})
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
              
              case "Friends Circle":
                return(
                <button
                onClick={() => {
                  setValue((prev : any) => { return {...prev,audience : item}})
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
                    <RiUserHeartLine/>
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

export default ChooseAudience;

const Arrow : React.FC<{active : boolean}> = ({
  active
}) => {
  return(
    <RiArrowDownSLine
    className={`
    text-[1.1rem]
    ${active ? "rotate-180" : ""}
    transition-all
    `}/>
  )
}

const data = [
  "Everyone",
  "Friends Circle"
]