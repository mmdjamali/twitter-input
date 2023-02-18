import React, { useLayoutEffect, useRef, useState } from 'react'

type props = {
    text : string,
    setData : (data : string) => void
}

const UserSuggestions : React.FC<props> = ({
    text,
    setData
}) => {
    const [position , setPosition] = useState<string>("")
    const [hidden , setHidden] = useState (false)
    const container = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        if(container.current){
            let top = container?.current.getBoundingClientRect().top;
            let height = innerHeight / 2;

            if(top > height){
                setPosition("bottom-[32px]")
                return
            }
            else{
                setPosition("top-[32px]")
                return
            }
        }
    },[container])

    const list = users.filter((item) => item.toLowerCase().search(text.toLowerCase()) >= 0)
  
    if(hidden || !list.length) return<></>
  
    return (
    <div
    ref={container}
    className={`
    animate-open
    flex
    flex-col
    items-stretch
    absolute
    ${position}
    bg-white
    border-[1px]
    border-neutral-700
    z-50
    rounded-md
    overflow-hidden
    pointer-events-auto
    w-[250px]
    `}
    >
        {list.slice(0,4).map((item , idx) => {
            return(
                <button
                onClick={() => {
                    setData(item || "")
                    setHidden(true)
                }}
                className='
                text-neutral-700
                sm:hover:bg-neutral-200
                text-[.9rem]
                py-2
                px-4
                flex
                items-start
                '
                key={idx}>
                    {item}
                </button>
            )
        })}

    </div>
  )
}

export default UserSuggestions

const string = `#coding #programmer #developer #coder #java #computerscience #technology #python #javascript #webdeveloper #html #code #webdevelopment #programmers #linux #php #programmingmemes #webdesign #hacking #css #codinglife #tech #cybersecurity #coders #geek #softwaredeveloper #programmingjokes #softwareengineer #iot #nodejs
#style #love #instagood #ootd #moda #beautiful #model #photooftheday #beauty #fashionblogger #instafashion #photography #fashionista #girl #cute #picoftheday #dress #outfit #happy #makeup #instagram #look #follow #stylish #shopping #summer #art #lifestyle #me #instadaily`

const users = string.replaceAll("#","@").split(" ")